import { notFound } from 'next/navigation';
import { STATES } from '@/constants/states';
import { Metadata } from 'next';
import { sections } from '@/components/sections';
import { Hero } from '@/components/sections/hero/Hero';
// Define the props type for the page component
interface StatePageProps {
  params: {
    state: string;  // This will match the [state] folder name
    searchParams?: { [key: string]: string | string[] | undefined };
  };
}

// This function tells Next.js which paths to pre-render at build time
export async function generateStaticParams() {
  return STATES.map((state) => ({
    state: state.id, // e.g., ['ny', 'ca', 'tx']
  }));
}

// The page component
export default function StatePage({ params }: StatePageProps) {
  // Get the state data based on the URL parameter
  const stateData = STATES.find((state) => state.id === params.state);

  // Show 404 page if state doesn't exist
  if (!stateData) {
    notFound();
  }

  return (
    <>
      {/* Dynamic section rendering */}
      {/* <sections.hero 
        title={stateData.content.hero.title} 
        description={stateData.content.hero.description} 
      />
      <sections.video_block /> */}
      <Hero title={stateData.content.hero.title} description={stateData.content.hero.description} />
    </>
  );
}

export async function generateMetadata({ params }: StatePageProps): Promise<Metadata> {
  const stateData = STATES.find((state) => state.id === params.state);

  return {
    title: `Visit ${stateData?.name || 'Our State'}`,
    description: stateData?.content.hero.description || 'Explore our state',
  };
}