"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Image from "next/image";

interface PromoBannerProps {
  src: string;
  alt: string;
}

const images: PromoBannerProps[] = [
  { src: "/promo-banner-01.png", alt: "Description of image 1" },
  { src: "/promo-banner-02.png", alt: "Description of image 2" },
  { src: "/promo-banner-03.png", alt: "Description of image 3" },
  { src: "/promo-banner-04.avif", alt: "Description of image 4" },
  { src: "/promo-banner-05.png", alt: "Description of image 5" },
  { src: "/promo-banner-06.png", alt: "Description of image 6" },
  { src: "/promo-banner-07.png", alt: "Description of image 7" },
  { src: "/promo-banner-08.png", alt: "Description of image 8" },
];

const PromoBanner: React.FC<PromoBannerProps> = ({ src, alt }) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={400}
      className="rounded-md"
    />
  );
};

export function CarouselSize() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      className="w-full max-w-sm rounded-md"
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.reset()}
    >
      <CarouselContent className="rounded-md">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className=" rounded-md md:basis-1/2 lg:basis-1/3"
          >
            <Card className="rounded-md">
              <CardContent className="w-full rounded-md p-0">
                <div className="h-full w-full rounded-md">
                  <PromoBanner src={image.src} alt={image.alt} />
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
