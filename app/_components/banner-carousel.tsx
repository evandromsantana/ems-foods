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
  { src: "/promo-banner-03.avif", alt: "Description of image 3" },
  { src: "/promo-banner-04.png", alt: "Description of image 4" },
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

export function BannerCarousel() {
  const autoplay = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  return (
    <Carousel
      plugins={[autoplay.current]}
      className="flex w-full max-w-none rounded-md"
      onMouseEnter={() => autoplay.current.stop()}
      onMouseLeave={() => autoplay.current.reset()}
    >
      <CarouselContent className="rounded-md">
        {images.map((image, index) => (
          <CarouselItem
            key={index}
            className="rounded-md md:basis-1/2 lg:basis-1/5"
          >
            <Card className="justify-between rounded-md">
              <CardContent className="flex w-full items-center justify-center rounded-md p-0">
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
