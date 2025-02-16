import { ButtonLink } from "@/components/ButtonLink";
import Image from "next/image";
import { SkaterScribble } from "./SkaterScribble";
import clsx from "clsx";
import { CONSULTANTS } from "@/constants/consultants";

export interface ConsultantsData {
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
  skater: ConsultantsData;
  index: number;
};

export function Consultant({ skater, index }: Props) {
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
          src={skater.background_image.url}
          width={500}
          height={500}
          quality={20}
          alt={skater.background_image.alt}
          className="scale-110 transform transition-all duration-1000 ease-in-out group-hover:scale-100 group-hover:brightness-75 group-hover:saturate-[.8]"
        />
        <SkaterScribble className={clsx("relative", scribbleColor)} />
        <Image
          src={skater.foreground_image.url}
          width={500}
          height={500}
          alt={skater.foreground_image.alt}
          className="transform transition-transform duration-1000 ease-in-out group-hover:scale-110"
        />
        <div className="relative h-48 w-full place-self-end bg-gradient-to-t from-black via-transparent to-transparent"></div>
        <h3 className="relative grid place-self-end justify-self-start p-2 font-sans text-brand-gray ~text-2xl/3xl">
          <span className="mb-[-.3em] block">{skater.name}</span>
          <span className="block text-sm">{skater.research_background}</span>
        </h3>
      </div>
      <ButtonLink href={skater.reach_out.url} size="sm">
        {skater.reach_out.text}
      </ButtonLink>
    </div>
  );
}