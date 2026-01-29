import { getAllArtists } from "@/lib/api";
import ClientWrapper from "@/components/layout/ClientWrapper";
import PrismMenu from "@/components/layout/PrismMenu";
import ArtistGrid from "@/components/profile/ArtistGrid"; // We build this next
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Cast | Aayam",
  description: "The complete roster of artists, creators, and leaders of Aayam.",
};

export const revalidate = 60;

export default async function ArtistIndexPage() {
  const artists = await getAllArtists();

  return (
    <main className="min-h-screen w-full bg-[#020202] text-[#F0F0F0] selection:bg-white/20">
      <ClientWrapper>
        <ArtistGrid artists={artists} />
        <PrismMenu />
      </ClientWrapper>
    </main>
  );
}