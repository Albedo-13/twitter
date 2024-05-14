import { zodResolver } from "@hookform/resolvers/zod";
import { doc, setDoc } from "firebase/firestore";
import { FieldErrors, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import addMedia from "@/assets/icons/add-media.svg";
import noAvatar from "@/assets/imgs/no_avatar.svg";
import { db } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { Button } from "@/ui/buttons";
import { uploadImage } from "@/utils/firebase/helpers";

import { Avatar } from "../avatar/avatar";
import ErrorsSummary from "../errors/errors-summary";
import { schema } from "./form-schema";
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

  const onSubmit = async (data: Data) => {
    const imageName = data.image ? await uploadImage(data.image[0]) : null;
    console.log("imageName", imageName);

    const postId = uuidv4();

    const newPost = {
      uid: postId,
      content: data.content,
      image: imageName || null,
      displayName: user?.displayName,
      authorUid: user?.uid,
      email: user?.email,
      createdAt: new Date(),
      likes: 0,
      likedByUsers: [],
    };

    await setDoc(doc(db, "posts", postId), newPost);

    reset();
  };

  // TODO: likes dark theme

  // TODO: В случае того, если аккаунта не существует, оповестить об этом пользователя.
  // TODO: Если занята почта или телефон, то показать ошибку.
  // TODO: В поле ввода Search Input можно ввести название tweet и в списке должен 
  // появиться tweet, при нажатии на который он открывается в новом окне.
  // TODO: В поиске Search Twitter происходит список пользователей Twitter
  // (поиск должен происходить на стороне firebase и возможность у твитов поставить лайк).
  // TODO: мобильная адаптация
  // TODO: тесты
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
        <ErrorsSummary errors={errors as FieldErrors} />
      </FormWrapper>
    </CreatePostWrapper>
  );
}
