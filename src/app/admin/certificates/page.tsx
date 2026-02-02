import TheForge from "@/components/certificate/TheForge";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Forge | Admin Console",
  description: "Mint and manage legacy assets.",
};

export default function AdminCertificatesPage() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* The Component takes over the full page */}
      <TheForge />
    </div>
  );
}