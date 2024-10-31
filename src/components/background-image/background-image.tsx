import { useEffect, useState } from "react";

import noBackground from "@/assets/imgs/no_background.webp";
import { getImageUrl } from "@/utils/firebase/helpers";

import { ProfileBackgroundImage } from "./styled";

type AvatarProps = {
  src?: string;
};

export function BackgroundImage({ src }: AvatarProps) {
  const [image, setImage] = useState<string | null>("");

  useEffect(() => {
    if (!src) return;
    getImageUrl(src).then(setImage);
  }, [src]);

  return <ProfileBackgroundImage src={image ? image : noBackground} />;
}
