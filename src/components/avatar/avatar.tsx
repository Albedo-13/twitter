import { StyledPropsType } from "@/types/styled-types";

import { StyledAvatar } from "./styled";

type AvatarProps = {
  src: string;
};

export function Avatar({ src, ...props }: AvatarProps & StyledPropsType) {
  return <StyledAvatar src={src} {...props} />;
}
