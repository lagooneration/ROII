import { FaStar, FaUserGraduate } from "react-icons/fa";
import Image from "next/image";
import { ButtonLink } from "@/components/ButtonLink";
import { HorizontalLine, VerticalLine } from "@/components/Line";
import clsx from "clsx";
import { Scribble } from "./Scribble";

async function getDominantColor(url: string) {
  const paletteURL = new URL(url);
  paletteURL.searchParams.set("palette", "json");

  const res = await fetch(paletteURL);
  const json = await res.json();

  return (
    json.dominant_colors.vibrant?.hex || json.dominant_colors.vibrant_light?.hex
  );
}

type Props = {
  id: string;
};

const VERTICAL_LINE_CLASSES =
  "absolute top-0 h-full stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

const HORIZONTAL_LINE_CLASSES =
  "-mx-8 stroke-2 text-stone-300 transition-colors group-hover:text-stone-400";

type CourseData = {
  seatsLeft: number;
  image: {
    url: string;
    alt: string;
  };
  name: string;
  scheduleUrl: string;
};

export async function CoursesJourney({ id }: Props) {
  // This would be replaced with your actual data fetching logic
  const getCourseData = async (id: string): Promise<CourseData> => {
    // Mock data - replace with real API call
    return {
      seatsLeft: 16,
      image: {
        url: "/course-image.jpg",
        alt: "Course Image"
      },
      name: "Course Name",
      scheduleUrl: "/schedule"
    };
  };

  const courseData = await getCourseData(id);

  const price = courseData.seatsLeft > 0
    ? <FaStar className="text-yellow-400" />
    : <FaStar className="text-gray-300" />;

  const dominantColor = await getDominantColor(courseData.image.url);

  return (
    <div className="group relative mx-auto w-full max-w-72 px-8 pt-4 ">
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "left-4")} />
      <VerticalLine className={clsx(VERTICAL_LINE_CLASSES, "right-4")} />
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <div className="flex items-center justify-between ~text-sm/2xl">
        <span className="inline-flex items-center gap-1">
          <FaUserGraduate className="text-brand-blue" /> <span className="text-sm">{courseData.seatsLeft} Seats Left</span>
        </span>
        <span>{price}</span>
      </div>
      <div className="-mb-1 overflow-hidden py-4">
        <Scribble
          className="absolute inset-0 w-full"
          color={dominantColor}
        />
        <Image
          alt={courseData.image.alt}
          src={courseData.image.url}
          width={150}
          height={150}
          className="mx-auto w-[58%] origin-top transform-gpu transition-transform duration-500 ease-in-out group-hover:scale-150"
        />
      </div>
      <HorizontalLine className={HORIZONTAL_LINE_CLASSES} />

      <h3 className="my-2 text-center font-sans leading-tight ~text-lg/xl">
        {courseData.name}
      </h3>

      <div className="absolute inset-0 mt-20 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <ButtonLink href={courseData.scheduleUrl}>Schedule a Demo</ButtonLink>
      </div>
    </div>
  );
}