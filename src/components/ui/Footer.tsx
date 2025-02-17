import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Bounded } from "../Bounded";
import { Socials } from "./Socials";

export function Footer() {
  // Mock data that would have come from Prismic
  const footerData = {
    footer_image: {
      url: "/images/footer-bg.jpg", // You'll need to add an actual image
      alt: "Footer background"
    },
    navigation: [
      {
        link: {
          text: "Home",
          url: "/"
        }
      },
      {
        link: {
          text: "About",
          url: "/about"
        }
      },
      {
        link: {
          text: "Courses",
          url: "/courses"
        }
      }
    ]
  };

  return (
    <footer className="bg-texture bg-brand-gray text-gray-700 overflow-hidden">
      <div className="relative h-[15vh] ~p-10/16 md:aspect-auto">
        {/* <Image
          src={footerData.footer_image.url}
          alt={footerData.footer_image.alt}
          fill
          className="object-cover"
          width={1200}
          priority
        /> */}
        {/* Note: FooterPhysics component removed as it was Prismic-specific */}
        {/* <Logo className="pointer-events-none relative h-20 mix-blend-exclusion md:h-28" /> */}
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-row items-center justify-center gap-4">
          <div>
            <Bounded as="nav">
              <ul className="flex flex-wrap justify-center gap-8 ~text-lg/xl">
                {footerData.navigation.map((item) => (
                  <li key={item.link.text} className="hover:underline">
                    <Link href={item.link.url}>
                      {item.link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Bounded>
          </div>
          <div>
            @ROII Punjab 
          </div>
        </div>
        <Socials />
      </div>
    </footer>
  );
}
