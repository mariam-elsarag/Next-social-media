import React from "react";
import ImageKit from "../ui/ImageKit";
import Post_Info from "../ui/Post_Info";
import Post_Interactions from "../ui/Post_Interactions";
import { RepostIcon } from "@/app/_assets/icons/Icon";

const Post = () => {
  return (
    <div className="p-4 border-y border-borderGrey">
      {/* type */}
      <header className="flex items-center gap-2 text-sm text-textGrey mb-2 font-semibold">
        <RepostIcon width="18" height="18" />
        <span>Mariam reposted </span>
      </header>
      {/* post content */}
      <div className="flex gap-3">
        <figure className="w-9 h-9 relative rounded-full overflow-hidden">
          <ImageKit
            src="general/post.jpeg"
            alt="avatar"
            width={100}
            height={100}
            tr
          />
        </figure>
        {/* content */}
        <div className="flex-1 flex flex-col gap-2 ">
          {/* top */}
          <header className="flex items-center justify-between gap-2 ">
            <div className="flex items-center gap-2 flex-wrap">
              <h1 className="text-sm font-semibold truncate ">Mariam tarek</h1>
              <span className="text-sm text-textGrey truncate">@mariam</span>
              <span className="text-sm text-textGrey truncate">1 day ago</span>
            </div>
            <Post_Info />
          </header>
          {/* text & media */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            corporis qui consectetur suscipit? Odit provident, ad nostrum magnam
            rerum veritatis dicta voluptate rem qui neque quibusdam minima sed
            nam iusto!
          </p>
          <ImageKit
            src="general/post.jpeg"
            alt="post"
            width={600}
            height={600}
          />
          <Post_Interactions />
        </div>
      </div>
    </div>
  );
};

export default Post;
