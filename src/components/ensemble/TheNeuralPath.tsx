import ClientWrapper from "@/components/layout/ClientWrapper";
import PrismMenu from "@/components/layout/PrismMenu";
import TheSerpentine from "@/components/ensemble/TheSerpentine"; // Updated
import { EnsembleMember } from "@/types/schema";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Nerve | Aayam",
  description: "The connection is the lifeblood.",
};

const CAST_LIST: EnsembleMember[] = [
  {
    id: '1',
    name: 'Siddharth',
    role: 'Secretary',
    rank: 'CROWN',
    department: 'direction',
    image_url: null,
    bio: 'The mind behind the Fourth Wall.',
    slug: 'sid',
    year: '2025-26',
    social_links: null,
    audio_url: null
  },
  {
    id: '2',
    name: 'Aditi',
    role: 'Creative Head',
    rank: 'ORBIT',
    department: 'design',
    image_url: null,
    bio: 'Painting silence with noise.',
    slug: 'aditi',
    year: '2025-26',
    social_links: null,
    audio_url: null
  },
  {
    id: '3',
    name: 'Vikram',
    role: 'Tech Lead',
    rank: 'ORBIT',
    department: 'tech',
    image_url: null,
    bio: 'Building castles in the cloud.',
    slug: 'vikram',
    year: '2025-26',
    social_links: null,
    audio_url: null
  },
  {
    id: '4',
    name: 'Rohan',
    role: 'Core Member',
    rank: 'CLOUD',
    department: 'acting',
    image_url: null,
    bio: 'Energy is the only currency.',
    slug: 'rohan',
    year: '2025-26',
    social_links: null,
    audio_url: null
  },
];

export default function EnsemblePage() {
  return (
    <main className="min-h-screen w-full bg-[#020202] text-[#F0F0F0] overflow-x-hidden selection:bg-gold-500/30">
      <ClientWrapper>
        <TheSerpentine members={CAST_LIST} currentYear="2026" />
        <PrismMenu />
      </ClientWrapper>
    </main>
  );
}