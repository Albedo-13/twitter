import { CreatePost } from "@/components/create-post/create-post";
import { Navigation } from "@/components/navigation/navigation";
import { Profile } from "@/components/profile/profile";
import { SearchSidebar } from "@/components/search-sidebar/search-sidebar";
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
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <ContentWrapper>
        <Profile />
        <CreatePost />
        <TweetsList />
      </ContentWrapper>
      <SearchWrapper>
        <SearchSidebar />
      </SearchWrapper>
    </ProfileWrapper>
  );
}
