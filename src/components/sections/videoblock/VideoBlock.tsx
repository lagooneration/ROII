"use client";

import { JSX } from "react";
import { Bounded } from "@/components/Bounded";
import { LazyYouTubePlayer } from "@/components/sections/videoblock/LazyYoutubePlayer";
import clsx from "clsx";
import Image from "next/image";
import { SlideIn } from "@/components/SlideIn";
import { Heading } from "@/components/Heading";

const MASK_CLASSES =
  "[mask-image:url(/video-mask.png)] [mask-mode:alpha] [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_auto]";

/**
 * Component for "VideoBlock" Slices.
 */

const youtubeId = "PpLecrTZOOQ";

const VideoBlock = (): JSX.Element => {
  return (
    <Bounded
      className="bg-texture bg-zinc-900 py-24"
    >
      <h2 className="sr-only">Video Reel</h2>
      <div className="relative aspect-video max-w-6xl mx-auto">
        {/* Masks */}
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-brand-lime absolute inset-0 ~translate-x-2/3 ~translate-y-2/3"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-white absolute inset-0 ~translate-x-1/3 ~translate-y-1/2"
          )}
        />
        <div
          className={clsx(
            MASK_CLASSES,
            "bg-white absolute inset-0 ~translate-x-1/2 ~-translate-y-1/3"
          )}
        />
        {/* Video */}
        <div className={clsx(MASK_CLASSES, "relative h-full")}>
          <LazyYouTubePlayer youTubeID={youtubeId} />
          {/* Texture overlay */}
          <Image
            src="/image-texture.png"
            alt=""
            fill
            sizes="100vw"
            className="pointer-events-none object-cover opacity-50"
          />
        </div>
      </div>
      <div>
      <Bounded>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row items-center justify-between gap-4">
            <SlideIn>
              <Heading size="lg" as="h2" className="text-brand-gray">
                Enactus
              </Heading>
            </SlideIn>
            <button className="bg-brand-purple text-white px-4 py-2 rounded-md">Enactus</button>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 text-gray-200">
            <p>
              Enactus is a global organization that empowers students to make a difference in their communities.
            </p>
          </div>
        </div>
      </Bounded>
      </div>
    </Bounded>
  );
};

export default VideoBlock;
