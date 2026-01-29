// import type { Metadata } from "next";
// import ClientWrapper from "@/components/layout/ClientWrapper";
// import PrismMenu from "@/components/layout/PrismMenu";
// import CastingInterface from "@/components/join/CastingInterface";

// export const metadata: Metadata = {
//   title: "The Ensemble | Join Aayam",
//   description: "Auditions, Collaborations, and Core Team Applications.",
// };

// export default function JoinPage() {
//   return (
//     <main className="min-h-screen bg-black">
//       <ClientWrapper>
//         <CastingInterface />
//         <PrismMenu />
//       </ClientWrapper>
//     </main>
//   );
// }

import type { Metadata } from "next";
import ClientWrapper from "@/components/layout/ClientWrapper";
import PrismMenu from "@/components/layout/PrismMenu";
import CastingInterface from "@/components/join/CastingInterface";

export const metadata: Metadata = {
  title: "The Ensemble | Join Aayam",
  description: "The stage has four entrances. Choose your role: Artist, Visionary, Alliance, or Architect.",
};

export default function JoinPage() {
  return (
    <main className="min-h-screen bg-[#050505] selection:bg-red-500/30 text-white">
      <ClientWrapper>
        {/* The 2x2 Cathedral Grid */}
        <CastingInterface />
        
        {/* The Navigation Prism */}
        <PrismMenu />
      </ClientWrapper>
    </main>
  );
}