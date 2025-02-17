"use client";
import React from "react";
import { FaLinkedin, FaYoutube, FaInstagram } from "react-icons/fa";
import { SlideIn } from "../SlideIn";
import { Bounded } from "../Bounded";
// import { PrismicNextLink } from "@prismicio/next";

export function Socials() {
  const socials = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/company/sikhya-sagar/",
      label: "LinkedIn"
    },
    {
      icon: FaYoutube, 
      url: "https://www.youtube.com/@sikhyasagar",
      label: "YouTube"
    },
    {
      icon: FaInstagram,
      url: "https://www.instagram.com/sikhyasagar/",
      label: "Instagram"
    }
  ];

  return (
    <Bounded as="nav">
      <ul className="flex flex-wrap justify-center gap-8">
        {socials.map((item) => (
          <li key={item.label} className="hover:scale-110 transition-transform">
            <a 
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.label}
            >
              <item.icon size={24} />
            </a>
          </li>
        ))}
      </ul>
    </Bounded>
  );
}
