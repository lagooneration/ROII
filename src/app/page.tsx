import Image from "next/image";
import StateSelector from '@/components/StateSelector';

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Choose Your State</h1>
      <StateSelector />
    </main>
  );
}
