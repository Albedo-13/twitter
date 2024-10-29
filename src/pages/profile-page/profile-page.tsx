import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

import { Profile } from "@/components/profile/profile";
import { TweetsList } from "@/components/tweets-list/tweets-list";
import { ROUTES } from "@/constants/routes";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

export function ProfilePage() {
  const user = useAppSelector(getUserSelector);
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({
    photoURL: "",
    displayName: "",
    status: "",
    email: "",
  });

  useEffect(() => {
    if (user.uid === id) {
      navigate(ROUTES.PERSONA);
    }
    const getAdditionalUserDataByUid = async () => {
      const queryUserSnapshot = await queryUserEqualByValue("uid", id!);
      if (queryUserSnapshot.empty) {
        toast.error("User not found");
        navigate(ROUTES.PROFILE);
      }
      const data = queryUserSnapshot.docs[0].data();
      setData({
        photoURL: data.photoURL,
        displayName: data.displayName,
        status: data.status,
        email: data.email,
      });
    };
    getAdditionalUserDataByUid();
  }, [id, navigate]);

  return (
    <>
      <Profile
        displayName={data.displayName}
        photoURL={data.photoURL}
        status={data.status}
        email={data.email}
      />
      <TweetsList />
    </>
  );
}
