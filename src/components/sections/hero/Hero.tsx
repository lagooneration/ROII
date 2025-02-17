import dynamic from 'next/dynamic';
import { Bounded } from "@/components/Bounded";
import { ButtonLink } from "@/components/ButtonLink";
import { Heading } from "@/components/Heading";
import { TallLogo } from "@/components/TallLogo";
// import { Pendulum } from "@/components/ui/Pendulum";
import { WideLogo } from "@/components/WideLogo";
// import { Experience } from "./Experience";

const Experience = dynamic(() => import('@/components/sections/hero/Experience').then(mod => mod.Experience), {
  ssr: false,
  loading: () => null
});
interface HeroProps {
  title: string;
  description: string;
  button: {
    children: string;
    href: string;
  };
}

export default function Hero({ title, description, button }: HeroProps) {
  if (!button?.href) {
    return null;
  }

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
          <ButtonLink 
            href={button.href} 
            theme="purple" 
            size="lg" 
            icon="arrow" 
            className="z-20 mt-2 block"
          >
            {button.children}
          </ButtonLink>
        </div>
      </div>
      {/* <Experience
          position={[0.6, -.1, 0.3]}
          rotation={[0, -Math.PI/4, 0]}
          scale={.06}
        /> */}
    </Bounded>
  );
}

Hero.defaultProps = {
  title: "asd",
  description: "asd",
  button: {
    children: "Learn More",
    href: "#",
  },
};
