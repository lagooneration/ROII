import { ConsultantsData } from "@/components/sections/teamgrid/Consultant";

export const CONSULTANTS: ConsultantsData[] = [
  {
    name: "Anchal Sharma",
    research_background: "Nehru Fullbright Fellow, MIT",
    background_image: {
      url: "/consultants/abg.png",
      alt: "background image of anchal",
    },
    foreground_image: {
      url: "/consultants/anc.png",
      alt: "foreground image of anchal",
    },
    reach_out: {
      url: "/",
      text: "Reach Out",
    },
  },
  {
    name: "Mihir Jain",
    research_background: "MS Computer Science, UC San Diego",
    background_image: {
      url: "/consultants/mbg.png",
      alt: "background image of mihir",
    },
    foreground_image: {
      url: "/consultants/mih.png",
      alt: "foreground image of mihir",
    },
    reach_out: {
      url: "/",
      text: "Reach Out",
    },
  },
  {
    name: "Simar Kaur",
    research_background: "PhD Chemical Engineering, MIT",
    background_image: {
      url: "/consultants/sbg.png",
      alt: "background image of simar",
    },
    foreground_image: {
      url: "/consultants/sim.png",
      alt: "foreground image of simar",
    },
    reach_out: {
      url: "/",
      text: "Reach Out",
    },
  },
  {
    name: "Simar Kaur",
    research_background: "PhD Chemical Engineering, MIT",
    background_image: {
      url: "/consultants/sbg.png",
      alt: "background image of simar",
    },
    foreground_image: {
      url: "/consultants/sim.png",
      alt: "foreground image of simar",
    },
    reach_out: {
      url: "/",
      text: "Reach Out",
    },
  },
];

export type Consultant = typeof CONSULTANTS[number];
