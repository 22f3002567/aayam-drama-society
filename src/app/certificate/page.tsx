// import type { Metadata } from "next";
// import ClientWrapper from "@/components/layout/ClientWrapper";
// import PrismMenu from "@/components/layout/PrismMenu";
// import CertificateVault from "@/components/certificate/CertificateVault";

// export const metadata: Metadata = {
//   title: "The Archives | Verify Certificate",
//   description: "Access the Hall of Records. Verify Aayam credentials.",
// };

// export default function CertificatePage() {
//   return (
//     <main className="min-h-screen bg-[#050505]">
//       <ClientWrapper>
//         <CertificateVault />
//         <PrismMenu />
//       </ClientWrapper>
//     </main>
//   );
// }

import type { Metadata } from "next";
import ClientWrapper from "@/components/layout/ClientWrapper";
import PrismMenu from "@/components/layout/PrismMenu";
import TheForge from "@/components/certificate/TheForge";

export const metadata: Metadata = {
  title: "The Forge | Aayam Archives",
  description: "Secure Certificate Verification System.",
};

export default function CertificatePage() {
  return (
    <main className="min-h-screen bg-[#020202]">
      <ClientWrapper>
        <TheForge />
        <PrismMenu />
      </ClientWrapper>
    </main>
  );
}