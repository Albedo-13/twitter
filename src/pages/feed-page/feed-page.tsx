import { CreatePost } from "@/components/create-post/create-post";
import { Navigation } from "@/components/navigation/navigation";
import { SearchSidebar } from "@/components/search-sidebar/search-sidebar";
import { ToggleTheme } from "@/components/toggle-theme/toggle-theme";
import { TweetsList } from "@/components/tweets-list/tweets-list";

import {
  ContentWrapper,
  NavigationWrapper,
  ProfileWrapper,
  SearchWrapper,
} from "./styled";

export function FeedPage() {
  return (
    <ProfileWrapper>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <ContentWrapper>
        <ToggleTheme />
        <CreatePost />
        <TweetsList />
      </ContentWrapper>
      <SearchWrapper>
        <SearchSidebar />
      </SearchWrapper>
    </ProfileWrapper>
  );
}
