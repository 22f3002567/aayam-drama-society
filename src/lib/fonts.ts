import { Playfair_Display, Inter, JetBrains_Mono } from 'next/font/google';

// 1. THE ARTIST (Headings, Titles, Dramatic moments)
export const fontSerif = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  weight: ['400', '700', '900'], // We need the heavy weights for impact
});

// 2. THE ENGINEER (Body text, UI elements, Readability)
export const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// 3. THE ARCHITECT (Metadata, Dates, Admin Panel)
export const fontMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});