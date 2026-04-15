# 🎭 Aayam :-: Dimensions Unfolding

> *"Aayam" (आयाम) :- Sanskrit. Meaning: Dimension. Scope. Depth.*
>
> The official digital infrastructure of the IITM BS Degree Drama Society.
> Deployed at [aayam.iitmbs.org](https://aayam.iitmbs.org)

---

## The Paradigm

Most platforms treat data as cargo.  they ship it, they display it,they discard it.

Aayam treats data as *performance*. Every fetch is a scene. Every render is a curtain rising. Every state transition is a character transformation.

This repository is not a club website. It is a **Digital Proscenium** :- a full-stack architecture that refuses the false binary between logic and emotion, between engineering and art. It is the answer to a question most developers never think to ask: *what if the interface itself had a Rasa?*

Built solo by the Secretary of Aayam, architected from first principles over multiple months of iteration. The commented code throughout this repository is not dead code. It is the **visible scar tissue of thought** :- a record of every philosophical decision made, reconsidered, and refined. To delete it would be to delete the process. The process is the proof.

---

## The Stack

| Layer | Technology | Why |
|---|---|---|
| Framework | **Next.js 15** (App Router) | Hybrid SSR/SSG - profiles are pre-rendered for SEO permanence; interactions are client-side for cinematic fluidity |
| Database + Auth | **Supabase** | Row Level Security (RLS) for data isolation; JWT authentication; real-time capabilities for live events |
| Styling | **Tailwind CSS** + custom CSS variables | Constraint-based design with surgical overrides; `selection:bg-[#eab308]` even text selection is *gold* |
| Animation | **Framer Motion** | `useScroll`, `useTransform`, `useSpring`, `AnimatePresence` its physics, not just transitions |
| Typography | **Playfair Display** + **Inter** + **JetBrains Mono** | Three registers of theater: The Artist, The Engineer, The Architect |
| Language | **TypeScript** (strict) | The schema is the contract. The contract is the philosophy. |

---

## The Architecture of the Soul

### Act I :-: The Ghost Light (`src/components/intro/GhostLight.tsx`)

In physical theater, when a stage is empty and dark, a single light is left burning. Not for illumination - there is no audience. It burns as a statement: *this space is sacred. It is not dead. It is only waiting.*

The GhostLight component encodes this ritual into React. It guards the entrance to the experience - and it earned its final form through **five complete redesigns**, all preserved in the file as commented history:

**Iteration 1:** A fade-in/fade-out. Adequate. Forgettable.
**Iteration 2:** A heartbeat dot with `scale: [1, 1.2, 1]` looping at 3s. The first breath.
**Iteration 3:** The Big Bang :- click triggers `scale: 300` expansion, covering the universe in gold for 2.5 seconds before the stage is revealed.
**Iteration 4:** The Flashbang :- a `duration: 0.05` instant white flash, then a gold afterimage via `mix-blend-overlay`. A film camera burning through the frame.
**Final:** A warm white (`#FFF9E5` :- not cold digital white, but the warmth of a stage tungsten bulb) with a film grain overlay loaded from a grainy-gradients source, lasting exactly 2500ms. The word "Ignite" fades in after 1 second of silence, 9px, tracking `[0.4em]`, in `neutral-700`.

The final GhostLight does not "load" the page. It *breaks open* the silence before the performance begins.

The `ClientWrapper` component wraps this behind `sessionStorage.getItem("aayam_session")` - so a returning visitor is never made to wait again. The ritual plays once, as all great entrances should.

```tsx
// AnimatePresence mode="wait" :- the technical implementation of
// "don't raise the curtain until the previous curtain has fully fallen"
<AnimatePresence mode="wait">
  {!stageReady && <GhostLight key="intro" onIgnite={handleIgnition} />}
</AnimatePresence>
```

---

### Act II :-: The Rasa Engine (`src/lib/rasa.ts`)

The Navarasa :- the Nine Aesthetic Essences of classical Indian dramaturgy :- is not a historical footnote in this codebase. It is the **emotional type system**.

```typescript
export const NAVARASA: RasaConfig[] = [
  { id: 'shringar', english: 'Love',     color: '#d946ef', tags: ['romance', 'drama', 'love', 'beauty', 'couple'] },
  { id: 'hasya',    english: 'Laughter', color: '#facc15', tags: ['comedy', 'satire', 'funny', 'humor', 'standup'] },
  { id: 'karuna',   english: 'Sorrow',   color: '#60a5fa', tags: ['tragedy', 'sad', 'emotional', 'grief', 'cry'] },
  { id: 'raudra',   english: 'Fury',     color: '#ef4444', tags: ['thriller', 'action', 'angry', 'rage', 'fight'] },
  { id: 'veera',    english: 'Heroism',  color: '#f97316', tags: ['heroic', 'patriotic', 'bold', 'war', 'brave'] },
  { id: 'bhayanaka',english: 'Terror',   color: '#10b981', tags: ['horror', 'dark', 'fear', 'spooky', 'mystery'] },
  { id: 'bibhatsa', english: 'Disgust',  color: '#6366f1', tags: ['gritty', 'disturbing', 'gross', 'crime'] },
  { id: 'adbhuta',  english: 'Wonder',   color: '#eab308', tags: ['experimental', 'fantasy', 'sci-fi', 'magic'] },
  { id: 'shanta',   english: 'Peace',    color: '#cbd5e1', tags: ['calm', 'philosophical', 'spiritual'] },
];

export const DEFAULT_RASA = NAVARASA[7]; // Adbhuta. Wonder. Gold.
```

The default state of this platform is **Wonder**. This is not an accident. This is a declaration.

The matching algorithm has three levels: exact ID match → Sanskrit label match → tag match → fallback to Adbhuta. An admin types "thriller" into a form and the platform finds Raudra (Fury, Red `#ef4444`). The interface does not just display content - it dresses it in its emotional color.

This is **Domain-Driven Design at the level of Indian aesthetic theory**. The data layer does not know about pixels; the UI layer does not know about Sanskrit. But between them, a 2,000-year-old classification system governs what color light bathes each piece of art.

---

### Act III :-: The Aura System (`src/lib/aura.ts`)

Every department in Aayam has a color. Not for branding. For *identity*.

```typescript
export const DEPARTMENT_AURAS: Record<string, AuraConfig> = {
  acting:     { color: '#ef4444', label: 'The Stage'  }, // Red ; where the body becomes the instrument
  scripting:  { color: '#eab308', label: 'The Ink'    }, // Gold ; where ideas become reality
  direction:  { color: '#a855f7', label: 'The Vision' }, // Purple ; where chaos becomes composition
  tech:       { color: '#3b82f6', label: 'The Code'   }, // Blue  ; where logic serves poetry
  design:     { color: '#ec4899', label: 'The Canvas' }, // Pink; where the visual becomes visceral
  management: { color: '#10b981', label: 'The Order'  }, // Green; where entropy is tamed
};
```

A lighting technician doesn't "belong to tech." They dwell in **The Code**. A set designer doesn't "do design." They work on **The Canvas**. The label is not a category. It is a *character description*.

---

### Act IV :-: The Neural Ensemble (`src/components/ensemble/`)

A standard directory maps a human being to a database row. This is a functional violence ; it reduces a person to their searchable attributes.

The Ensemble section rejects this entirely. It uses two architecturally distinct renderers:

#### `TheSynapse.tsx` :-: The Serpentine Nerve

Members alternate left and right down the page like a DNA strand. Each node activates on scroll via:

```tsx
const opacity = useTransform(scrollYProgress, [0, 0.4], [0, 1]);
const scale   = useTransform(scrollYProgress, [0, 0.4], [0.8, 1]);
const glowIntensity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);
```

The nerve connection between nodes is a CSS bezier border with a `animate-pulse-nerve` class :-: a current of energy moving along the connection. Not decoration. Metaphor made literal.

Every member has an audio component. Clicking their photograph plays their voice note. A shared `activeAudioId` state ensures only one voice plays at a time;- because this is an *ensemble*, not a cacophony. The photographs are grayscale by default, desaturating into abstraction until activated - the moment of activation restores their color and plays their voice. They come alive only when you choose to hear them.

#### `TheNeuralCircuit.tsx` - The Live-Wire Signal

This component computes the *exact pixel coordinates* of every member's position and draws a living SVG path that connects them all:

```tsx
const center = width / 2;
const leftX  = width * 0.20;
const rightX = width * 0.80;

// The path zigs from center → text → image → center (repeat)
// creating a jagged, kinetic electrical signal through the society's history
```

The SVG has three simultaneous layers:
1. **The Ghost Path** - a dim `strokeOpacity: 0.3` gold track, the memory of the path before you scroll
2. **The Gold Nerve** - `pathLength` driven by `useSpring(scrollYProgress)` with `stiffness: 60, damping: 20` - fills as you descend, with `mix-blend-exclusion` creating a "cut through reality" effect
3. **The White Pulse Beam** - a continuously travelling `pathLength: [0, 0.2, 0]` white stroke with a Gaussian blur filter and `mix-blend-screen`, looping every 1.5 seconds - the firing neuron, the signal that never stops

The ensemble-layout utility sorts members by `MemberRank` - not alphabetically, not by join date - by their **narrative weight** in the story of Aayam:
- `ZENITH` :- Faculty. The source of gravity.
- `CROWN` :- Secretary, Joint Secretary. The summit.
- `ORBIT` :- Heads and Leads. The architects.
- `CLOUD` :- Core members. The foundation.

The pseudo-random positioning uses `((index * 37) % 80) - 40` :- a deterministic chaotic function. The same chaos every render, safe for SSR, unrepeatable in pattern.

---

### Act V :-: The Typographic Trinity (`src/lib/fonts.ts`)

```typescript
// 1. THE ARTIST ;- Headings, titles, dramatic moments
export const fontSerif = Playfair_Display({ weight: ['400', '700', '900'] });

// 2. THE ENGINEER ;- Body text, UI elements, readability
export const fontSans = Inter({ ... });

// 3. THE ARCHITECT ;- Metadata, dates, admin panel, system voice
export const fontMono = JetBrains_Mono({ ... });
```

Three fonts. Three roles. The Serif speaks in the language of literature and stage. The Sans speaks in the language of the interface, the pragmatic, the human. The Mono speaks in the language of systems, timestamps, and cryptographic IDs. They never collide. They never compete. They play their parts.

---

### Act VI :-: The Manifesto (`src/components/about/TheManifesto.tsx`)

The About page was redesigned three times. Each iteration is preserved as commented code - a record of what was tried, rejected, and why.

**First draft:** A corporate-manifesto layout. "Risk, Truth, and Spectacle." Bold. Cold.
**Second draft:** A screenplay format. Stage directions. `[TURNS TO AUDIENCE]`. Dangerously self-aware.
**Final:** A letter.

```tsx
{/* THE SIGNATURE (The Heart) */}
<div className="mt-16 pt-8 border-t border-white/10">
  <p className="font-mono text-xs text-white/40 uppercase tracking-widest mb-4">
    From the core of my heart,
  </p>
  
  <span className="block text-3xl md:text-4xl font-serif text-white mb-1">
    Siddharth
  </span>
  
  {/* The Title ;- Struck Through */}
  <div className="relative inline-block">
    <span className="text-sm font-mono text-white/30 uppercase tracking-widest">
      The Secretary
    </span>
    {/* The red line draws itself across "The Secretary" as you scroll */}
    <motion.div 
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 1, delay: 0.5 }}
      className="absolute top-1/2 left-0 h-[1px] bg-red-500 -rotate-2"
    />
  </div>

  {/* The Real Identity */}
  <motion.span 
    initial={{ opacity: 0, y: 5 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 1.5 }}
    className="block mt-2 font-serif italic text-gold-500 text-lg"
  >
    "Just your friend."
  </motion.span>
</div>
```

The title "The Secretary" draws a red line through itself, animated across 1 second. Then, after a deliberate 1.5-second pause - long enough to make you feel the weight of the strike - the real identity appears: *"Just your friend."*

This is the fourth wall breaking in a single motion. This is a 24-year-old running a drama society at a distance-learning university, dropping every bureaucratic mask at the bottom of the page, in gold italics, for every visitor who scrolls far enough to earn it.

---

### Act VII :-: The Crucible (`src/components/join/CastingInterface.tsx`)

The Join page was redesigned twice.

**First design:** "The Protagonist." "The Playwright." "The Patron." "The Architect." Theatrical labels. Deeply thematic. But slightly inaccessible - a newcomer might not recognize themselves in these archetypes.

**Final design:** Four cards. Four first-person statements.

```
I WANT TO PERFORM.
I WANT A STORY.
I WANT TO PARTNER.
I WANT TO LEAD.
```

The photographs are grayscale by default. On hover, they come alive - `grayscale-0`, `opacity-60`, `scale-110`. This is the UX metaphor for potential: grey until activated, colorless until the choice is made to step forward.

The header reads: *"Come Home to Aayam."*

Not "Join Us." Not "Apply Now." Home. The choice of this single word is the most important UX decision in the entire repository.

---

### Act VIII :-: The Forge & The Archives (`src/components/certificate/TheForge.tsx`)

Certificates in Aayam are not participation trophies. They are cryptographic proofs of contribution.

The hash algorithm uses `Math.imul(31, hash) + seed.charCodeAt(i)` - a polynomial rolling hash, the same family of algorithms used in production string matching systems - to generate unique certificate IDs of the form `AYM:SN-4A2F`. The visual design includes a guilloche border pattern (the repeating nested border seen on currency and legal documents), a holographic foil animation via `background-size: 250% 250%` gradient animation, and a wax-seal-style verification stamp that springs in with `type: "spring", stiffness: 200`.

Every person who helped build Aayam - actor, writer, lighting tech, social media manager - receives a document whose visual language says: *this is real. This counts. We remember.*

The schema even has an `imdb` field in `SocialLinks`. Because why shouldn't a member of an IITM drama society have an IMDB page? That is the ambition being encoded at the type level.

---

### Act IX :-: The Nexus (`src/middleware.ts` + `src/app/admin/`)

The admin security operates on four gates:

```typescript
// GATE A: Not authenticated → /admin/login
// GATE B: Authenticated but not in app_roles table → unauthorized_access error
// GATE C: Authenticated + authorized → /admin/dashboard  
// GATE D: /admin root → intelligent redirect based on state
```

Gate B is the critical insight: Supabase authentication proves *identity*, but not *authorization*. A Google account that somehow reaches `/admin` is authenticated but not trusted. The `app_roles` table is the second lock. This is **defense in depth** ;- the same security philosophy used in enterprise systems - applied to a university drama society's content management system.

The admin tools carry names that treat the Secretary not as a data entry operator, but as a historian:
- **ChronicleToolbar** ; for events
- **SignalConsole** ; for live operational health
- **TheForge** ; for certificate generation
- **TenureManager** ; for member lifecycle
- *"Erase this moment from history?"* ; the delete confirmation message

The TenureManager's delete prompt doesn't say "Are you sure?" It says *"Erase this moment from history?"* ;- a single line that makes the operator feel the weight of what they're about to do.

---

### Act X :-: The Schema as Constitution (`src/types/schema.ts`)

The schema file contains **seven complete iterations** preserved as comments. This is not technical debt. This is an architectural autobiography.

The `EnsembleMember` type's most significant field:

```typescript
// GOD TIER ADDITION: Free-form roles that don't fit in "Tenure" or "Play Credit"
// e.g. ["Website Developer", "Event Head 2024", "Stage Design"]
legacy_titles: string[] | null;
```

A relational database can only capture what you anticipated. `legacy_titles: string[]` is the acknowledgment that human contribution is always larger than any schema. This field exists to capture the person who built the website, the person who designed the poster nobody asked for, the person who stayed until 3am doing something that had no title. Every one of them deserves a record.

---

### Act XI :-: The Sensory Layer (`src/lib/audio.ts` + `public/sfx/`)

The web is, by default, a silent medium. This silence is the sound of distance - it keeps the user safely outside the experience, consuming but not present.

```typescript
const audioCache: Record<string, HTMLAudioElement> = {};

export const playSound = (type: 'hover' | 'click' | 'hum') => {
  if (typeof window === 'undefined') return;        // SSR Safety
  if (!audioCache[type]) {                           // Lazy init
    audioCache[type] = new Audio(`/sfx/${type}.mp3`);
    audioCache[type].volume = type === 'hum' ? 0.2 : 0.5; // Ambient vs Active
  }
  audio.currentTime = 0;                            // Zero-latency replay
  audio.play().catch(() => {});                     // Silent failure - never punishes the user
};
```

The Singleton cache pattern means the same Audio object is reused - no GC pressure, no reload latency. `audio.currentTime = 0` before every play means rapid repeated interactions feel instantaneous. The `catch(() => {})` handles browser autoplay restrictions silently - the interface never breaks, never throws, never complains.

Five sound files: `hover.mp3`, `hover1.mp3`, `hover2.mp3`, `click.mp3`, `hum.mp3`.
Two volumes: ambient (0.2) and interactive (0.5).
One philosophy: the stage is never completely silent.

---

## Directory Architecture

```
src/
├── app/                         # The Acts (Next.js App Router)
│   ├── page.tsx                 # Act I - The Entry (GhostLight → HeroStage)
│   ├── about/                   # The Manifesto
│   ├── ensemble/                # The Thread of Souls
│   │   └── [slug]/              # Individual Legacy Profiles
│   ├── originals/               # The Repertoire (Rasa-filtered)
│   │   └── [slug]/              # Individual Play Pages with Cast Roll
│   ├── events/                  # The Chronicle (Timeline of Actions)
│   ├── join/                    # The Crucible (CastingInterface)
│   ├── certificate/             # The Archives (Verification Vault)
│   ├── artist/[slug]/           # The Portfolio (Public Artist Profile)
│   └── admin/                   # The Nexus (Secure Backstage)
│       ├── login/               # Gate A/C
│       ├── dashboard/           # SignalConsole
│       ├── members/             # Roster + TenureManager
│       ├── originals/           # PlayList + CastManager
│       ├── events/              # ChronicleToolbar
│       ├── challenges/          # PulseToolbar
│       ├── certificates/        # TheForge
│       └── inbox/               # Submission Triage
│
├── components/
│   ├── intro/GhostLight.tsx     # The Overture (5 design generations)
│   ├── ensemble/                # TheSynapse, TheNeuralCircuit, LiveWireLayout
│   ├── originals/               # RasaAtmosphere, RasaDock, CinemaPlayer
│   ├── about/                   # TheManifesto, TheSwitchboard
│   ├── join/                    # CastingInterface, TheAudition
│   ├── events/                  # LuminousTimeline, TheCrucible, ArchiveReel
│   ├── certificate/             # TheForge, CertificateVault
│   ├── admin/                   # NexusLayout + all backstage tooling
│   ├── layout/                  # ClientWrapper, TheSigil, PrismMenu, Footer
│   └── ui/                      # CinematicFrame (Reusable theatrical elements)
│
├── lib/
│   ├── rasa.ts                  # The Nine Aesthetic Essences (Navarasa)
│   ├── aura.ts                  # Department color/identity system
│   ├── audio.ts                 # Singleton sound engine
│   ├── fonts.ts                 # Artist / Engineer / Architect typography
│   ├── ensemble-layout.ts       # Narrative sorting + SSR-safe positioning
│   ├── certificates.ts          # Hash generation & verification
│   ├── api.ts                   # Server-side data access layer
│   └── supabase/                # client.ts / server.ts / admin.ts
│
├── types/schema.ts              # The Constitution (7 design generations)
└── middleware.ts                # The Four Gates of the Nexus
```

---

## Initialization

```bash
git clone https://github.com/[your-handle]/aayam-drama-society.git
cd aayam-drama-society
npm install
```

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

```bash
npm run dev
# The proscenium opens at http://localhost:3000
```

---

## The Philosophy of the Commented Code

Every file in this repository contains multiple generations of code preserved as comments. This is not poor housekeeping.

It is a record of how a mind works through a problem - the same way a playwright's drafts reveal more about their craft than their final script. The comments show five attempts at the Ghost Light before the warm-white celluloid burn was chosen. They show seven iterations of the database schema before `legacy_titles: string[]` was understood as necessary. They show the moment "The Protagonist / The Playwright / The Patron / The Architect" was replaced by "I WANT TO PERFORM" - a shift from theatrical archetype to human voice.

Most developers delete this history. This codebase keeps it. Because the path is as valuable as the destination.

---

## Live Production Notes

- **Domain:** `aayam.iitmbs.org`
- **Title tag:** `"Aayam | Dimensions Unfolding"` - Sanskrit meaning encoded into metadata
- **Text selection color:** Gold (`#eab308`) - the Aayam accent, consistent even in the browser's native selection behavior
- **TheSigil** component is rendered as a `<body>`-level permanent anchor across all routes - the society's mark is always present, always watching
- `revalidate = 0` on the home page - the stage always shows the latest performance

---

## Architect

**Ayush Yadav**
Secretary, Aayam Drama Society · IITM BS Degree

This project is a synthesis of disciplines that rarely share the same sentence: asynchronous state management and Bharata Muni's Natyashastra. Graph-network rendering and the psychology of initiation. Cryptographic hash functions and the ceremony of a certificate. Defense-in-depth security architecture and the question of who deserves to be called a member of a community.

The answer this codebase gives to that last question: everyone who showed up. Every actor, every writer, every lighting tech, every person who stayed late and whose name belongs in `legacy_titles`.

Software can be a sterile transaction. Or, when architected with the full weight of human intention, it can be an act.

---

> *"We do not build pages. We design stages."*
>
> *"We do not route data. We route human memory."*
















This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
