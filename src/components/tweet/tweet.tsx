import { deleteDoc, doc, DocumentData, updateDoc } from "firebase/firestore";
import { deleteObject, getDownloadURL, ref } from "firebase/storage";
import { SyntheticEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// import liked from "@/assets/icons/liked.svg";
// import notLiked from "@/assets/icons/not_liked.svg";
import trashCan from "@/assets/icons/trash-can.svg";
import noAvatar from "@/assets/imgs/no_avatar.png";
import { LIKE_DEBOUNCE_DELAY_MS } from "@/constants/constants";
import { ROUTES } from "@/constants/routes";
import { db, storage } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

import { Avatar } from "../avatar/avatar";
import {
  AvatarWrapper,
  BodyWrapper,
  DeleteIcon,
  Image,
  LikeCount,
  LikeSVGOuter,
  LikeSVGInner,
  // LikeIcon,
  LikeButton,
  // LikeCheck,
  // LikeCheckmark,
  LikeWrapper,
  TweetText,
  UserInfoWrapper,
  UserName,
  UserTag,
  UserTime,
  Wrapper,
} from "./styled";
import { TimeoutId } from "node_modules/@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

type TweetProps = {
  post: DocumentData;
};

export function Tweet({ post }: TweetProps) {
  const user = useAppSelector(getUserSelector);
  const [imgUrl, setImgUrl] = useState<string | undefined>(undefined);
  const [photoUrl, setPhotoUrl] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  const location = useLocation();

  console.log(post);
  const getImageUrl = async () => {
    try {
      const url = await getDownloadURL(ref(storage, post?.image));
      return url;
    } catch (error) {
      return undefined;
    }
  };

  const getUserPhotoByUid = async (userId: string) => {
    const queryUserSnapshot = await queryUserEqualByValue("uid", userId);
    if (!queryUserSnapshot.empty) {
      return queryUserSnapshot.docs[0].data().photoURL;
    }
  };

  useEffect(() => {
    getImageUrl()
      .then((url) => setImgUrl(url))
      .catch(() => setImgUrl(undefined));
    getUserPhotoByUid(post.authorUid).then((url) => setPhotoUrl(url));
  }, []);

  const handleDeleteClick = async (e: SyntheticEvent) => {
    e.stopPropagation();
    if (post.image) {
      const desertRef = ref(storage, post.image);
      await deleteObject(desertRef);
    }
    await deleteDoc(doc(db, "posts", post.uid));
    if (location.pathname.includes(ROUTES.POST)) {
      navigate(ROUTES.HOME);
    }
  };

  const handleOpenPost = () => {
    navigate(`${ROUTES.POST}/${post.uid}`);
  };

  const convertTime = (timestamp: number) => {
    const { locale } = Intl.DateTimeFormat().resolvedOptions();
    const moment = new Date(timestamp * 1000);
    const date = moment.toLocaleDateString(locale);
    const time = moment.toLocaleTimeString(locale);
    return `${time} - ${date}`;
  };

  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src={photoUrl || noAvatar} />
      </AvatarWrapper>
      <BodyWrapper onClick={handleOpenPost}>
        <UserInfoWrapper>
          <UserName>{post.displayName}</UserName>
          {/* <UserTag>{post.email}</UserTag> */}
          <UserTime title={convertTime(post.createdAt.seconds)}>TUTVREMYAPOTOM</UserTime>
        </UserInfoWrapper>
        <TweetText>{post.content}</TweetText>
        {imgUrl && <Image src={imgUrl} alt="tweet image" />}
        <Like post={post} user={user} />
      </BodyWrapper>
      {user.uid === post.authorUid && (
        <DeleteIcon
          onClick={handleDeleteClick}
          src={trashCan}
          alt="delete icon"
        />
      )}
    </Wrapper>
  );
}

type LikeProps = {
  post: DocumentData;
  user: any;
};

type LikeData = {
  count: number | null;
  liked: boolean | null;
};

const Like = ({ post, user }: LikeProps) => {
  const [timer, setTimer] = useState<TimeoutId | null>(null);
  const [likeData, setLikeData] = useState<LikeData>({
    count: null,
    liked: null,
  });

  useEffect(() => {
    setLikeData((prev) => {
      return {
        ...prev,
        count: post.likes,
        liked: post.likedByUsers.includes(user.uid),
      };
    });
  }, []);

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const increment = (event: SyntheticEvent) => {
    event.stopPropagation();
    let newCount = likeData.count! + (likeData.liked ? -1 : 1);

    setLikeData((prev) => {
      return {
        ...prev,
        count: newCount,
        liked: !prev.liked,
      };
    });

    if (timer) clearTimeout(timer);

    const newTimer = setTimeout(() => {
      sendToServer(newCount, !likeData.liked);
    }, LIKE_DEBOUNCE_DELAY_MS);

    setTimer(newTimer);
  };

  const sendToServer = async (likesCount: number, isLiked: boolean) => {
    const wasLikedBefore = post.likedByUsers.includes(user.uid);

    if (user.uid && wasLikedBefore !== isLiked) {
      let newLikedByUsers: any = [];

      if (wasLikedBefore) {
        newLikedByUsers = post.likedByUsers.filter(
          (uid: string) => uid !== user.uid
        );
      } else {
        newLikedByUsers = [...post.likedByUsers, user.uid];
      }

      const postRef = doc(db, "posts", post.uid);
      updateDoc(postRef, {
        likes: likesCount,
        likedByUsers: newLikedByUsers,
      });
    }
  };

  return (
    <>
      <LikeWrapper onClick={increment}>
        <LikeButton />

        <LikeSVGOuter
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={likeData.liked ? "liked" : "not_liked"}
        >
          <g>
            <path
              d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
              fill="currentColor"
            ></path>
          </g>
        </LikeSVGOuter>
        <LikeSVGInner
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={likeData.liked ? "liked" : "not_liked"}
        >
          <g>
            <path
              d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z "
              fill="currentColor"
            ></path>
          </g>
        </LikeSVGInner>
        <LikeCount>{likeData.count}</LikeCount>
      </LikeWrapper>
    </>
  );
};
