import Image, { ImageProps } from "next/image";

const PromoBanner = (props: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      className="h-auto w-full bg-red-600 object-contain"
      sizes="100vm"
      quality={100}
      {...props}
    />
  );
};

export default PromoBanner;
