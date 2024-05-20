import { UserName, UserTag, UserText, WrapperLink } from "./styled";

type SearchTweetProps = {
  name: string;
  email: string;
  content?: string;
  link?: string;
};

export function SearchTweet({ name, email, content, link = "#" }: SearchTweetProps) {
  return (
    <WrapperLink to={link}>
      <UserName>{name}</UserName>
      <UserTag>{email}</UserTag>
      <UserText>{content}</UserText>
    </WrapperLink>
  );
}
