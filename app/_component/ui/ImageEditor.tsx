import { ImageSettingType } from "@/app/_common/type";
import Image from "next/image";
import React, { JSX } from "react";
import Button from "../shared/Button";
import {
  ArrowIcon,
  OriginalIcon,
  SquareIcon,
  WideIcon,
} from "@/app/_assets/icons/Icon";
type IconType = {
  id: number;
  icon: any;
  text: string;
  type: "original" | "wide" | "square";
};
const iconList: IconType[] = [
  {
    id: 1,
    icon: OriginalIcon,
    text: "Original",
    type: "original",
  },
  {
    id: 2,
    icon: WideIcon,
    text: "Wide",
    type: "wide",
  },
  {
    id: 3,
    icon: SquareIcon,
    text: "Square",
    type: "square",
  },
];
const ImageEditor = ({
  onClose,
  preview,
  settings,
  setSettings,
}: {
  onClose: () => void;
  preview: string;
  settings: ImageSettingType;
  setSettings: React.Dispatch<React.SetStateAction<ImageSettingType>>;
}) => {
  const handleChangeSensitve = () => {
    setSettings((pre) => ({ ...pre, sensitive: !settings.sensitive }));
  };
  return (
    <div className="fixed inset-0 w-full h-full bg-black/75 z-10 flex items-center justify-center">
      <div className="bg-black rounded-xl p-12 flex flex-col gap-4">
        <header className="flex items-center justify-between">
          <div className="flex items-center">
            {" "}
            <Button
              icon={<ArrowIcon fill="fill-white" width="24" height="24" />}
              variant="transparent"
              handleClick={onClose}
              hasFullWidth={false}
            />
            <h1 className="font-semibold text-lg">Media settings</h1>
          </div>
          <Button
            text="save"
            hasFullWidth={false}
            className="px-4!"
            handleClick={onClose}
          />
        </header>
        <div className="w-[500px] h-[500px]  flex items-center overflow-hidden">
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
        </div>
        {/* settings */}
        <footer className="flex items-center justify-between text-sm">
          <div className="flex items-center  text-sm  gap-8">
            {iconList?.map((item) => {
              const IconCom = (
                <item.icon
                  fill={
                    settings.type === item.type
                      ? "fill-iconBlue"
                      : "fill-[#e7e9ea]"
                  }
                />
              );

              return (
                <div
                  className="cursor-pointer flex items-center gap-2 "
                  onClick={() =>
                    setSettings((pre) => ({ ...pre, type: item.type }))
                  }
                  key={item.id}
                >
                  {IconCom}
                  {item.text}
                </div>
              );
            })}
          </div>
          <Button
            variant={settings.sensitive ? "error" : "primary"}
            text="Sensitive"
            handleClick={handleChangeSensitve}
          />
        </footer>
      </div>
    </div>
  );
};

export default ImageEditor;
