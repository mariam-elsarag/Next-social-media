"use client";
import {
  CommentIcon,
  LikeIcon,
  RepostIcon,
  SaveIcon,
  ShareIcon,
} from "@/app/_assets/icons/Icon";
import React from "react";

const baseInteractions = [
  {
    id: 1,
    icon: CommentIcon,
    fill: "fill-textGrey",
    hover: "group-hover:fill-iconBlue",
    textColor: "group-hover:text-iconBlue",
    value: 100,
  },
  {
    id: 2,
    icon: RepostIcon,
    fill: "fill-textGrey",
    hover: "group-hover:fill-iconGreen",
    textColor: "group-hover:text-iconGreen",
    value: 100,
  },
  {
    id: 3,
    icon: LikeIcon,
    fill: "fill-textGrey",
    hover: "group-hover:fill-iconPink",
    textColor: "group-hover:text-iconPink",
    value: 100,
  },
];
const Post_Interactions = () => {
  return (
    <div className="flex items-center justify-between gap-4 lg:gap-16 my-2 text-textGrey">
      <div className="flex-1 flex items-center justify-between gap-4">
        {baseInteractions?.map((item) => {
          const IconCom = <item.icon fill={`${item.fill} ${item.hover}`} />;
          return (
            <div
              key={item.id}
              className=" cursor-pointer flex items-center group"
            >
              {IconCom}
              <span className={`${item.textColor} text-sm`}>{item.value}</span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center gap-2">
        <span className="group cursor-pointer">
          <SaveIcon fill="fill-textGrey group-hover:fill-iconBlue" />
        </span>
        <span className="group cursor-pointer">
          <ShareIcon fill="fill-textGrey group-hover:fill-iconBlue" />
        </span>
      </div>
    </div>
  );
};

export default Post_Interactions;
