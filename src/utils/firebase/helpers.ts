import { EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";
import {
  collection,
  DocumentData,
  getDocs,
  query,
  QuerySnapshot,
  where,
} from "firebase/firestore";
import { ref, uploadBytes } from "firebase/storage";
import { v4 as uuidv4 } from "uuid";

import { auth, db, storage } from "@/firebase";
import { UserType } from "@/redux/slices/user-slice";

export type FileType = Blob | Uint8Array | ArrayBuffer | null;

export const queryUserEqualByValue = async (field: string, value: string) => {
  const querySnapshot = await getDocs(
    query(collection(db, "users"), where(field, "==", value))
  );
  return querySnapshot;
};

export const getLoginFromEmailOrPhone = (
  queryEmailSnapshot: QuerySnapshot<DocumentData, DocumentData>,
  queryPhoneSnapshot: QuerySnapshot<DocumentData, DocumentData>
) => {
  let user = null;

  if (!queryEmailSnapshot.empty) {
    user = queryEmailSnapshot.docs[0].data();
  } else if (!queryPhoneSnapshot.empty) {
    user = queryPhoneSnapshot.docs[0].data();
  }

  return user;
};

export const adaptUserObj = (user: DocumentData | null): UserType => {
  return {
    uid: user?.uid ?? "",
    email: user?.email ?? "",
    phone: user?.phone ?? "",
    photoURL: user?.photoURL ?? "",
    displayName: user?.displayName ?? "",
    birthday: user?.birthday ?? "",
    gender: user?.gender ?? "",
    status: user?.status ?? "",
  };
};

export const uploadFile = async (folder: string, file: FileType | null) => {
  if (file === null) return;

  const imageName = `${folder}/${uuidv4()}`;
  const imageRef = ref(storage, imageName);
  await uploadBytes(imageRef, file);

  return imageName;
};

export const reauthUser = async (password: string) => {
  if (auth.currentUser) {
    const credential = EmailAuthProvider.credential(
      auth.currentUser.email!,
      password
    );
    await reauthenticateWithCredential(auth.currentUser, credential);
  }
};
