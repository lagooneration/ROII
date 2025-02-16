import { notFound } from 'next/navigation';
import { STATES } from '@/constants/states';
import { Metadata } from 'next';
// import { sections } from '@/components/sections';
import { Hero } from '@/components/sections/hero/Hero';
import VideoBlock from '@/components/sections/videoblock/VideoBlock';
import CoursesGrid from '@/components/sections/coursesgrid/CoursesGrid';
import Journey from '@/components/sections/journey/Journey';
import TeamGrid from '@/components/sections/teamgrid/TeamGrid';
import { CONSULTANTS } from '@/constants/consultants';

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

  // Check if courses_grid exists before accessing it
  const coursesGridData = 'courses_grid' in stateData.content ? stateData.content.courses_grid : null;

  // Check if journey exists before accessing it
  const journeyData = 'journey' in stateData.content ? stateData.content.journey : null;

  // Check if teamgrid exists before accessing it
  const teamGridData = 'teamgrid' in stateData.content ? stateData.content.teamgrid : null;

  return (
    <>
      <Hero 
      title={stateData.content.hero.title} 
      description={stateData.content.hero.description} 
      button={{
        children: "Know More",
        href: "/some-path"
      }}
      />
      {coursesGridData && (
        <CoursesGrid 
          heading={coursesGridData.heading} 
          body={coursesGridData.body} 
          courses={[...coursesGridData.courses]} // Convert readonly array to mutable array
        />
      )}
      {teamGridData && (
        <TeamGrid heading={teamGridData.heading} consultants={CONSULTANTS} />
      )}
      {/* {journeyData && <Journey slice={journeyData} index={0} />} */}
      <VideoBlock />
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