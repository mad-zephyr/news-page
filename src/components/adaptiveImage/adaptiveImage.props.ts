import { StaticImageData } from "next/image";

export interface AdaptiveImageProps {
  className?: string;
  alt: string;
  fill: boolean;
  priority: boolean;
  sizes: "100vw";
  breakpoint: number;
  desktopImage: StaticImageData;
  mobileImage: StaticImageData;
  style?: { objectFit: "cover" };
}
