import { CreatePost } from "@/components/create-post/create-post";
import { Profile } from "@/components/profile/profile";
import { TweetsList } from "@/components/tweets-list/tweets-list";
import { auth } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";

export function PersonaPage() {
  const { photoURL, displayName, status } = useAppSelector(getUserSelector);

  return (
    <>
      <Profile
        displayName={displayName}
        photoURL={photoURL}
        status={status}
        email={auth.currentUser!.email!}
      />
      <CreatePost />
      <TweetsList />
    </>
  );
}
