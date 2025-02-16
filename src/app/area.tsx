import { ButtonLink } from "@/components/ButtonLink";
import Image from "next/image";
import { SkaterScribble } from "@/components/sections/teamgrid/SkaterScribble";
import clsx from "clsx";
// import { CONSULTANTS } from "@/constants/consultants";

export interface AreaData {
  name: string;
  research_background: string;
  background_image: {
    url: string;
    alt: string;
  };
  foreground_image: {
    url: string;
    alt: string;
  };
  reach_out: {
    url: string;
    text: string;
  };
}

type Props = {
  area: AreaData;
  index: number;
};

export function AreaData({ area, index }: Props) {
  const colors = [
    "text-brand-blue",
    "text-brand-lime",
    "text-brand-orange",
    "text-brand-pink",
    "text-brand-purple",
  ];

  const scribbleColor = colors[index];

  return (
    <div className="skater group relative flex flex-col items-center gap-4">
      <div className="stack-layout overflow-hidden">
        <Image
          src={area.background_image.url}
          width={500}
          height={500}
          quality={20}
          alt={area.background_image.alt}
          className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
        />
        <SkaterScribble className={clsx("relative", scribbleColor)} />
        <Image
          src={area.foreground_image.url}
          width={500}
          height={500}
          alt={area.foreground_image.alt}
          className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <h3 className="relative grid place-self-end justify-self-start p-2 font-sans text-brand-gray ~text-2xl/3xl">
          <span className="mb-[-.3em] block">{area.name}</span>
          <span className="block text-sm">{area.research_background}</span>
        </h3>
      </div>
      <ButtonLink href={area.reach_out.url} size="sm">
        {area.reach_out.text}
      </ButtonLink>
    </div>
  );
}