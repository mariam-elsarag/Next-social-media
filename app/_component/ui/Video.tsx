"use client";
import React from "react";
import { Video as IkVidoe } from "@imagekit/next";
const Video = ({
  src,
  width,
  height,
  className,
}: {
  src: string;
  width: number;
  height: number;
  className?: string;
}) => {
  const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT!;
  return (
    <IkVidoe
      urlEndpoint={urlEndpoint}
      src={src}
      controls
      width={width}
      height={height}
      // transformation={[{ width: "1920", height: "1080", quality: 90 }]}
      className={`${className} max-h-[500px] mx-auto`}
    />
  );
};

export default Video;
