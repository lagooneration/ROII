import dynamic from "next/dynamic";
import { FC } from "react";

const LoadingSection: FC<{ height: string }> = ({ height }) => (
    <div className={`min-h-[${height}] animate-pulse bg-gray-100`} />
  );

export const sections = {
  hero: dynamic<{}>(async () => {
    const mod = await import("./hero/Hero");
    return mod.default;
  }, {
    loading: () => <LoadingSection height="50vh" />
  }),
  video_block: dynamic<{}>(async () => {
    const mod = await import("./videoblock/VideoBlock"); 
    return mod.default;
  }, {
    loading: () => <LoadingSection height="40vh" />
  }),
  // Add more sections as needed
} as const;


export type SectionName = keyof typeof sections;