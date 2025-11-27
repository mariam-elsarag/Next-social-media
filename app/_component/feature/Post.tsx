import ImageKit from "../ui/ImageKit";
import Post_Info from "../ui/Post_Info";
import Post_Interactions from "../ui/Post_Interactions";
import { RepostIcon } from "@/app/_assets/icons/Icon";
import { imagekit } from "@/app/_common/utils";
import Video from "../ui/Video";

interface FileDetialsResponse {
  width: number;
  height: number;
  filePath: string;
  url: string;
  fileType: string;
  customMetadata?: { sensitive: boolean };
}

const Post = async () => {
  const getFileDetails = async (
    fileId: string
  ): Promise<FileDetialsResponse> => {
    return new Promise((resolve, reject) => {
      imagekit.getFileDetails(fileId, (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result as FileDetialsResponse);
        }
      });
    });
  };
  const fileDetails = await getFileDetails("692870ea5c7cd75eb80c0123");

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
          <div className="flex flex-col gap-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              corporis qui consectetur suscipit? Odit provident, ad nostrum
              magnam rerum veritatis dicta voluptate rem qui neque quibusdam
              minima sed nam iusto!
            </p>

            {fileDetails && fileDetails.fileType === "image" ? (
              <figure className="max-h-[400px] overflow-hidden rounded-lg">
                <ImageKit
                  src={fileDetails.url}
                  width={fileDetails.width}
                  height={fileDetails.height}
                  alt="post"
                  className={`  object-cover object-center max-h-[500px] rounded-lg  ${
                    fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
                  }`}
                />
              </figure>
            ) : (
              <Video
                src={fileDetails.url}
                width={fileDetails.width}
                height={fileDetails.height}
                className={`   ${
                  fileDetails.customMetadata?.sensitive ? "blur-lg" : ""
                }`}
              />
            )}

            <Post_Interactions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
