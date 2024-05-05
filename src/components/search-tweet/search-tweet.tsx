import { UserName, UserTag, UserText, WrapperLink } from "./styled";

export function SearchTweet() {
  return (
    <WrapperLink to="#">
      <UserName>bober</UserName>
      <UserTag>@bober_kurwa</UserTag>
      <UserText>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae,
        dolorum. Nisi, suscipit? Placeat odio enim, veniam cum quas perferendis!
        Sequi reiciendis blanditiis quibusdam debitis modi quae voluptatem
        deserunt totam quia.
      </UserText>
    </WrapperLink>
  );
}
