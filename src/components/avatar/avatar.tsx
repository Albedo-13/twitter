import { StyledAvatar } from "./styled";

export function Avatar({ src, width }: { src: string; width?: string }) {
  return <StyledAvatar $width={width} src={src} />;
}
