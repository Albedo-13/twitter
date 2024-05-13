import { addDoc, collection } from "firebase/firestore";
import { ChangeEvent, useState } from "react";

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

export function CreatePost() {
  const [content, setContent] = useState("");
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const user = useAppSelector((state) => state.userReducer);
  console.log("user", user);

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handlePhotoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageUpload(e.target.files[0]);
    }
  };

  // TODO: reset form on submit
  // TODO: image is optionate
  // TODO: type any can be fixed with react hook form
  // TODO: sort by createdAt
  // TODO: active refresh on docs update
  // TODO: likes (total count; if me in liked)
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const imageName = await uploadImage(imageUpload);
    console.log("imageName", imageName);

    const newPost = {
      content: content,
      image: imageName,
      displayName: user?.displayName,
      authorUid: user?.uid,
      email: user?.email,
      createdAt: new Date(),
      likes: 0,
      likedByUsers: [],
    };

    await addDoc(collection(db, "posts"), newPost);
  };

  return (
    <CreatePostWrapper>
      <AvatarWrapper>
        <Avatar src={noAvatar} />
      </AvatarWrapper>
      <FormWrapper>
        <Textarea
          value={content}
          onChange={handleContentChange}
          placeholder="What's happening?"
        />
        <BasementWrapper>
          <FileInputWrapper>
            <label htmlFor="file-input">
              <FileInputImage src={addMedia} alt="upload file" />
            </label>
            <FileInput
              type="file"
              id="file-input"
              accept="image/png, image/jpeg"
              onChange={handlePhotoUpload}
            />
          </FileInputWrapper>
          <Button
            variant="primary"
            size="small"
            type="submit"
            onClick={handleSubmit}
          >
            Tweet
          </Button>
        </BasementWrapper>
      </FormWrapper>
    </CreatePostWrapper>
  );
}
