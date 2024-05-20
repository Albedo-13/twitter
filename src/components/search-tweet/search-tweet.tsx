import { UserName, UserTag, UserText, WrapperLink } from "./styled";

// TODO: any type
export function SearchTweet({ name, email, content, link = "#" }: any) {
  return (
    <WrapperLink to={link}>
      <UserName>{name}</UserName>
      <UserTag>{email}</UserTag>
      <UserText>{content}</UserText>
    </WrapperLink>
  );
}
