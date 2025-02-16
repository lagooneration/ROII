import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { TallLogo } from "@/components/TallLogo";
import { WideLogo } from "@/components/WideLogo";

interface HeroProps {
  title: string;
  description: string;
}

export function Hero({ title, description }: HeroProps) {
  return (
    <Bounded
      className="bg-brand-lime relative h-dvh overflow-hidden text-zinc-800 bg-texture"
    >
      <div className="absolute inset-0 flex items-center pt-20">
        <WideLogo className="w-full text-brand-purple hidden opacity-20 mix-blend-multiply lg:block"/>
        <TallLogo className="w-full text-brand-purple opacity-20 mix-blend-multiply lg:hidden"/>
      </div>

      <div className="grid absolute inset-0 mx-auto mt-24 max-w-6xl grid-rows-[1fr,auto] place-items-end px-6 ~py-10/16">
        <Heading size="lg" className="relative max-w-2xl place-self-start">
          Research Oriented Innovation Incubator
        </Heading>
        <div className="flex relative w-full flex-col items-center justify-between ~gap-2/4 lg:flex-row">
          <div className="max-w-[45ch] font-semibold ~text-lg/xl">
            {title}
            <p>{description}</p>
          </div>
          <button className="bg-brand-purple text-white px-4 py-2 rounded-md">
            Know More
          </button>
        </div>
      </div>
    </Bounded>
  );
}
