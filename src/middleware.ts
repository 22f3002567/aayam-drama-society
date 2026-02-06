// // // import { NextResponse } from 'next/server'
// // // import type { NextRequest } from 'next/server'

// // // export function middleware(request: NextRequest) {
// // //   // 1. IDENTIFY THE ZONES
// // //   const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
// // //   const isLoginRoute = request.nextUrl.pathname === '/admin/login'

// // //   // 2. CHECK CREDENTIALS (The "nexus_session" cookie)
// // //   // We set this cookie in the Login page when you enter the correct code.
// // //   const hasSession = request.cookies.has('nexus_session')

// // //   // 3. THE RULES OF ENGAGEMENT
  
// // //   // RULE A: If trying to enter Admin (and not on Login) without a session -> KICK OUT
// // //   if (isAdminRoute && !isLoginRoute && !hasSession) {
// // //     return NextResponse.redirect(new URL('/admin/login', request.url))
// // //   }

// // //   // RULE B: If already logged in and trying to access Login -> REDIRECT TO BRIDGE
// // //   if (isLoginRoute && hasSession) {
// // //     return NextResponse.redirect(new URL('/admin/dashboard', request.url))
// // //   }

// // //   // Allow all other requests to pass
// // //   return NextResponse.next()
// // // }

// // // // 4. THE SCOPE (Where this logic applies)
// // // export const config = {
// // //   matcher: ['/admin/:path*'],
// // // }

// // import { NextResponse } from 'next/server'
// // import type { NextRequest } from 'next/server'

// // export function middleware(request: NextRequest) {
// //   const { pathname } = request.nextUrl
// //   const isAdminRoute = pathname.startsWith('/admin')
// //   const isLoginRoute = pathname === '/admin/login'
// //   const isRootAdmin = pathname === '/admin' // Exact match

// //   const hasSession = request.cookies.has('nexus_session')

// //   // 1. Redirect root /admin to dashboard (or login)
// //   if (isRootAdmin) {
// //      const target = hasSession ? '/admin/dashboard' : '/admin/login';
// //      return NextResponse.redirect(new URL(target, request.url));
// //   }

// //   // 2. Protect Admin Routes
// //   if (isAdminRoute && !isLoginRoute && !hasSession) {
// //     return NextResponse.redirect(new URL('/admin/login', request.url))
// //   }

// //   // 3. Prevent Login access if already authenticated
// //   if (isLoginRoute && hasSession) {
// //     return NextResponse.redirect(new URL('/admin/dashboard', request.url))
// //   }

// //   return NextResponse.next()
// // }

// // export const config = {
// //   matcher: ['/admin/:path*'],
// // }

// import { createServerClient } from '@supabase/ssr'
// import { NextResponse, type NextRequest } from 'next/server'

// export async function middleware(request: NextRequest) {
//   let response = NextResponse.next({
//     request: { headers: request.headers },
//   })

//   // 1. INITIALIZE SUPABASE
//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() { return request.cookies.getAll() },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
//           response = NextResponse.next({ request: { headers: request.headers } })
//           cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
//         },
//       },
//     }
//   )

//   // 2. CHECK USER
//   const { data: { user } } = await supabase.auth.getUser()

//   const { pathname } = request.nextUrl
//   const isAdminRoute = pathname.startsWith('/admin')
//   const isLoginRoute = pathname === '/admin/login'

//   // 3. SECURITY GATES
  
//   // A. Protect Admin Routes
//   if (isAdminRoute && !isLoginRoute && !user) {
//     return NextResponse.redirect(new URL('/admin/login', request.url))
//   }

//   // B. Prevent Double Login
//   if (isLoginRoute && user) {
//     return NextResponse.redirect(new URL('/admin/dashboard', request.url))
//   }

//   // C. Root Admin Redirect
//   if (pathname === '/admin') {
//      return NextResponse.redirect(new URL(user ? '/admin/dashboard' : '/admin/login', request.url))
//   }

//   return response
// }

// export const config = {
//   matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
// }

import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  let response = NextResponse.next({
    request: { headers: request.headers },
  })

  // 1. INITIALIZE SUPABASE
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll() },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value))
          response = NextResponse.next({ request: { headers: request.headers } })
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options))
        },
      },
    }
  )

  // 2. CHECK IDENTITY
  const { data: { user } } = await supabase.auth.getUser()
  
  const { pathname } = request.nextUrl
  const isAdminRoute = pathname.startsWith('/admin')
  const isLoginRoute = pathname === '/admin/login'

  // 3. SECURITY GATES
  
  // GATE A: Not Logged In -> Kick to Login
  if (isAdminRoute && !isLoginRoute && !user) {
    return NextResponse.redirect(new URL('/admin/login', request.url))
  }

  // GATE B: Logged In but Unauthorized (The "Random Google User" Check)
  if (user && isAdminRoute) {
     // Check if this user has a Role in your database
     const { data: roleData } = await supabase
        .from('app_roles')
        .select('role')
        .eq('id', user.id)
        .single()
      
     // If they are NOT in the 'app_roles' table -> BLOCK THEM
     if (!roleData && !isLoginRoute) {
        // Optional: You could redirect to a specific "Unauthorized" page
        // For now, we kick them back to login with an error
        const url = new URL('/admin/login', request.url)
        url.searchParams.set('error', 'unauthorized_access')
        return NextResponse.redirect(url)
     }
  }

  // GATE C: Already Logged In -> Redirect to Dashboard
  if (isLoginRoute && user) {
     // (Optional optimization: Check role here too before redirecting to dashboard)
    return NextResponse.redirect(new URL('/admin/dashboard', request.url))
  }

  // GATE D: Root Admin Redirect
  if (pathname === '/admin') {
     return NextResponse.redirect(new URL(user ? '/admin/dashboard' : '/admin/login', request.url))
  }

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'],
}