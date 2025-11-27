import { Image } from "@imagekit/next";

type ImageKitPropsType = {
  src: string;
  width: number;
  height: number;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  tr?: boolean;
};
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const ImageKit = ({
  src,
  width,
  height,
  alt,
  className,
  tr,
  loading = "eager",
}: ImageKitPropsType) => {
  return (
    <Image
      urlEndpoint={urlEndpoint}
      width={width}
      height={height}
      {...(tr ? { transformation: [{ width, height }] } : { width, height })}
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default ImageKit;
