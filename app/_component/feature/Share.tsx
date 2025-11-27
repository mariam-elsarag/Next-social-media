"use client";
import React, { useState } from "react";
import ImageKit from "../ui/ImageKit";
import Button from "../shared/Button";
import { shareAction } from "@/app/actions";
import Image from "next/image";
import ImageEditor from "../ui/ImageEditor";
import { ImageSettingType } from "@/app/_common/type";

const IconList = [
  { id: 1, src: "image.svg", type: "img" },
  { id: 2, src: "gif.svg", type: "gif" },
  { id: 3, src: "poll.svg", type: "poll" },
  { id: 4, src: "emoji.svg", type: "emoji" },
  { id: 5, src: "schedule.svg", type: "calendar" },
  { id: 6, src: "location.svg", type: "location" },
];
const Share = () => {
  const [media, setMedia] = useState<null | File>(null);
  const [toggleEditor, setToggleEditor] = useState<boolean>(false);
  const [settings, setSettings] = useState<ImageSettingType>({
    type: "original",
    sensitive: false,
  });
  const handleChangeMedia = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setMedia(file);
    }
  };
  const preview = media ? URL.createObjectURL(media) : null;
  return (
    <form
      action={(formData) => shareAction(formData, settings)}
      className="p-4 flex gap-4"
    >
      {/* avatar */}
      <figure className="relative overflow-hidden rounded-full w-9 h-9">
        <ImageKit
          src="general/post.jpeg"
          alt="avatar"
          width={100}
          height={100}
          tr
        />
      </figure>
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          placeholder="What is happining?!"
          name="description"
        />
        {media?.type?.includes("image") && preview && (
          <figure className="relative rounded-xl overflow-hidden w-[500px] max-h-[500px]">
            <Image
              src={preview}
              alt="post"
              width={500}
              height={500}
              className={`w-full ${
                settings.type === "original"
                  ? "w-fit object-contain"
                  : settings.type === "square"
                  ? "aspect-square  object-cover"
                  : "aspect-video object-cover"
              }`}
            />
            <div
              onClick={() => setToggleEditor(true)}
              className="absolute top-2 left-2 bg-black/50 text-white py-1 px-4 rounded-full text-sm font-semibold cursor-pointer"
            >
              Edit
            </div>
          </figure>
        )}
        {media?.type.includes("video") && preview && (
          <div className="relative w-fit mx-auto max-h-[500px]">
            <video src={preview} controls className="h-full" />
            <Button
              variant="primary_50"
              text="X"
              className="absolute top-2 right-2"
              handleClick={() => setMedia(null)}
            />
          </div>
        )}
        {preview && toggleEditor && (
          <ImageEditor
            onClose={() => setToggleEditor(false)}
            preview={preview}
            settings={settings}
            setSettings={setSettings}
          />
        )}
        <div className="flex items-center justify-between gap-4 flex-wrap ">
          <input
            type="file"
            onChange={handleChangeMedia}
            className="hidden"
            id="file"
            name="file"
            accept="image/*,video/*"
          />
          <div className="flex gap-4 flex-wrap">
            {IconList?.map((item) =>
              item.type === "img" ? (
                <label htmlFor="file" key={item.id} className="cursor-pointer">
                  <ImageKit
                    width={20}
                    height={20}
                    src={`icon/${item.src}`}
                    alt="img"
                  />
                </label>
              ) : (
                <Button
                  variant="transparent"
                  src={`icon/${item.src}`}
                  imgWidth={20}
                  imgHeight={20}
                  hasFullWidth={false}
                  className="px-0! py-0! w-5! h-5!"
                  key={item.id}
                />
              )
            )}
          </div>
          <Button
            text="post"
            hasFullWidth={false}
            className="px-6! "
            type="submit"
          />
        </div>
      </div>
    </form>
  );
};

export default Share;
