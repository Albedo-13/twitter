import { CreatePost } from "@/components/create-post/create-post";
import { Navigation } from "@/components/navigation/navigation";
import { Profile } from "@/components/profile/profile";
import { TweetsList } from "@/components/tweets-list/tweets-list";

import {
  ContentWrapper,
  NavigationWrapper,
  ProfileWrapper,
  SearchWrapper,
} from "./styled";

export function ProfilePage() {
  return (
    <ProfileWrapper>
      <NavigationWrapper style={{ border: "1px solid red" }}>
        <Navigation />
      </NavigationWrapper>
      <ContentWrapper style={{ border: "1px solid green" }}>
        <Profile />
        <CreatePost />
        <TweetsList />
      </ContentWrapper>
      <SearchWrapper style={{ backgroundColor: "blue" }}>Search</SearchWrapper>
    </ProfileWrapper>
  );
}
