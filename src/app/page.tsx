import Image from "next/image";
import StateSelector from '@/components/StateSelector';
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import TeamGrid from "@/components/sections/teamgrid/TeamGrid";
import { AREA } from "@/constants/area";

export default function Home() {
  return (
    <Bounded className="min-h-screen p-8">
      <Heading className="text-4xl font-bold mb-8">Choose Your State</Heading>
      <StateSelector />
      <TeamGrid heading='Choose Your State' consultants={AREA} />
  
    </Bounded>
  );
}
