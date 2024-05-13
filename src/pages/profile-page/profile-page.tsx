import { CreatePost } from "@/components/create-post/create-post";
import { Profile } from "@/components/profile/profile";
import { TweetsList } from "@/components/tweets-list/tweets-list";

export function ProfilePage() {
  return (
    <>
      <Profile />
      <CreatePost />
      <TweetsList />
    </>
  );
}
