import { UserName, UserTag, UserText, WrapperLink } from "./styled";

// TODO: any type
export function SearchTweet({ avatarUrl, name, email }: any) {
  return (
    <WrapperLink to="#">
      <UserName>{name}</UserName>
      <UserTag>@bober</UserTag>
      <UserText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
        dolorum. Nisi, suscipit? Placeat odio enim, veniam cum quas perferendis!
        Sequi reiciendis blanditiis quibusdam debitis modi quae voluptatem
        deserunt totam quia.
      </UserText>
    </WrapperLink>
  );
}
