"use server";

import { ImageSettingType } from "./_common/type";
import { imagekit } from "./_common/utils";

export const shareAction = async (
  formData: FormData,
  settings: ImageSettingType
) => {
  const file = formData.get("file") as File;
  const text = formData.get("description") as string;

  const transformation = `w-500, ${
    settings.type === "square"
      ? "ar-1-1"
      : settings.type === "wide"
      ? "ar-16-9"
      : ""
  }`;

  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);

  imagekit.upload(
    {
      file: buffer,
      fileName: file.name,
      folder: "/posts",
      ...(file.type.includes("image") && {
        transformation: {
          pre: transformation,
        },
      }),
      customMetadata: {
        sensitive: settings.sensitive,
      },
    },
    (error, result) => {
      if (error) {
        console.error(error);
      } else {
        console.log(result, "result");
      }
    }
  );

  // console.log(file, result);
};
