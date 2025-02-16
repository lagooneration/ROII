import { JSX } from "react/jsx-runtime";
import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { SlideIn } from "@/components/SlideIn";
import { CoursesJourney } from "./CoursesJourney";

interface Course {
  id: string;
  steps: {
    id: string;
    name: string;
  }[];
}

interface CoursesGridProps {
  heading: string;
  body: string;
  courses: Course[];
}

const CoursesGrid = ({ heading, body, courses }: CoursesGridProps): JSX.Element => {
  return (
    <Bounded className="bg-white">
        <SlideIn>
        <Heading className="text-center ~mb-4/6" as="h2">
         {heading}
        </Heading>
      </SlideIn>
      <SlideIn>
        <div className="text-center ~mb-6/10">
          {body}
        </div>
      </SlideIn>
      <div className="flex flex-col gap-8">
        
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <div 
              key={course.id}
              className="rounded-lg border border-zinc-200 p-6 hover:border-brand-purple transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">
                {course.name}
              </h3>
              <p className="text-zinc-600">
                {course.steps.length} steps
              </p>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default CoursesGrid;
