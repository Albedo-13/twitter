// import { CreatePost } from "@/components/create-post/create-post";
// import { Profile } from "@/components/profile/profile";
import { TweetsList } from "@/components/tweets-list/tweets-list";
import { Header } from "@/components/header/header";

export function BookmarksPage() {
  return (
    <>
      <Header title="Bookmarks"/>
      <TweetsList />
    </>
  );
}
