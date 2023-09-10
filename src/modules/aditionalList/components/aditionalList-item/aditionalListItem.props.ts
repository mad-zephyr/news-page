import { StaticImageData } from "next/image";

export interface AditionalNewsProps {
  image: string | StaticImageData;
  number?: number;
  title: string;
  text: string;
  nav: string;
}

export interface AditionaItemProps {
  props: AditionalNewsProps;
}
