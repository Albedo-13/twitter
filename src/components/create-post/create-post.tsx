import { addDoc, collection } from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";

import addMedia from "@/assets/icons/add-media.svg";
import noAvatar from "@/assets/imgs/no_avatar.svg";
import { db } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { Button } from "@/ui/buttons";
import { uploadImage } from "@/utils/firebase/helpers";

import { Avatar } from "../avatar/avatar";
import {
  AvatarWrapper,
  BasementWrapper,
  CreatePostWrapper,
  FileInput,
  FileInputImage,
  FileInputWrapper,
  FormWrapper,
  Textarea,
} from "./styled";
import { zodResolver } from "@hookform/resolvers/zod";
import { schema } from "./form-schema";

type Data = {
  content: string;
  image: FileList | null;
};

export function CreatePost() {
  const user = useAppSelector((state) => state.userReducer);
  console.log("user", user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: {
      content: "",
      image: null,
    },
    resolver: zodResolver(schema),
  });

  // TODO: type any can be fixed with react hook form
  // TODO: reset form on submit

  // TODO: only self-made posts on profile
  // TODO: sort by createdAt
  // TODO: delete post (only self made post)
  // TODO: active refresh on docs update
  // TODO: likes (total count; if me in liked)
  // TODO: likes dark theme
  const onSubmit = async (data: Data) => {
    const imageName = data.image ? await uploadImage(data.image[0]) : null;
    console.log("imageName", imageName);

    const newPost = {
      content: data.content,
      image: imageName || null,
      displayName: user?.displayName,
      authorUid: user?.uid,
      email: user?.email,
      createdAt: new Date(),
      likes: 0,
      likedByUsers: [],
    };

    await addDoc(collection(db, "posts"), newPost);

    reset();
  };

  return (
    <CreatePostWrapper>
      <AvatarWrapper>
        <Avatar src={user.photoURL ? user.photoURL : noAvatar} />
      </AvatarWrapper>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <Textarea {...register("content")} placeholder="What's happening?" />
        <BasementWrapper>
          <FileInputWrapper>
            <label htmlFor="file-input">
              <FileInputImage src={addMedia} alt="upload file" />
            </label>
            <FileInput
              {...register("image")}
              type="file"
              id="file-input"
              accept="image/png, image/jpeg"
            />
          </FileInputWrapper>
          <Button variant="primary" size="small" type="submit">
            Tweet
          </Button>
        </BasementWrapper>
      </FormWrapper>
    </CreatePostWrapper>
  );
}
