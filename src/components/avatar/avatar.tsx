import { StyledAvatar } from "./styled";

type AvatarProps = {
  src: string;
};

export function Avatar({ src }: AvatarProps) {
  return <StyledAvatar src={src} />;
}
