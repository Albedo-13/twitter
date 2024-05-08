import { StyledAvatar } from "./styled";

type AvatarProps = {
  src: string;
  $width?: string;
};

export function Avatar({
  src,
  $width,
}: AvatarProps) {
  return <StyledAvatar src={src} $width={$width} />;
}
