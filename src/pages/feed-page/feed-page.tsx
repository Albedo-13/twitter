import { CreatePost } from "@/components/create-post/create-post";
import { ToggleTheme } from "@/components/toggle-theme/toggle-theme";
import { TweetsList } from "@/components/tweets-list/tweets-list";

export function FeedPage() {
  return (
    <>
      <ToggleTheme />
      <CreatePost />
      <TweetsList />
    </>
  );
}
