import { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { doc, setDoc } from "firebase/firestore";
import { FieldErrors, useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

import addMedia from "@/assets/icons/add-media.svg";
import { db } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { Button } from "@/ui/buttons";
import { uploadFile } from "@/utils/firebase/helpers";

import { ErrorsSummary } from "../errors/errors-summary";
import { schema } from "./form-schema";

import {
  CreateChatModalWrapper,
  FormWrapper,
  InformationWrapper,
  ErrorWrapper,
  FileInput,
  FileInputImage,
  FileInputWrapper,
  NameInput,
  ButtonWrapper,
  FileInputLabel,
} from "./styled";

import { AddUsersToChat } from "@/components/create-chat/add-users-to-chat";

type Data = {
  name: string;
  image: FileList | null;
};

type ChildData = {
  [key: string]: boolean;
};

//высрал говно, хранить selected в детеяи не стоит, храни на этом уровне и дриль и при
//рендере дзеця смотри есть ли true / false | undefined понял? понял, харош

type CreateChatModalProps = {
  handleModalClose: Function;
};

export function CreateChatModal({ handleModalClose }: CreateChatModalProps) {
  const user = useAppSelector(getUserSelector);
  const [currentPage, setCurrentPage] = useState<1 | 2>(1);
  const [previewImage, setPreviewImage] = useState<string>("");

  const childData = useRef<ChildData>({});

  const handleCollectChildData = (id: string, state: boolean) => {
    childData.current[id] = state;
  };

  const convertCollectedChildData = (data: {}) => {
    const res: string[] = [];
    for (const [key, value] of Object.entries(data)) {
      if (value) res.push(key);
    }
    return res;
  };

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<Data>({
    defaultValues: {
      name: "",
      image: null,
    },
    resolver: zodResolver(schema),
  });

  const getUploadedImageName = async (images: FileList | null) => {
    return images ? await uploadFile("chats", images[0]) : null;
  };

  const onSubmit = async (data: Data) => {
    const membersData = convertCollectedChildData(childData.current);
    const membersDataWithSelf = [...membersData, user.uid];
    const imageName = await getUploadedImageName(data.image);
    const chatId = uuidv4();

    const newChat = {
      uid: chatId,
      members: membersDataWithSelf,
      image: imageName,
      name: data.name,
      createdAt: new Date(),
    };

    await setDoc(doc(db, "chats", chatId), newChat);
    reset();
    setPreviewImage("");
    handleModalClose();
  };

  const handleFileInputChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function ({ target }) {
        if (target) {
          setPreviewImage(target.result as string);
        } else {
          console.error("Bug perhaps, i dunno");
        }
      };
      reader.readAsDataURL(file);
    }
    register("image").onChange(event);
  };

  return (
    <>
      <CreateChatModalWrapper>
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          {
            {
              "1": (
                <>
                  <InformationWrapper>
                    <FileInputWrapper>
                      <FileInputLabel
                        htmlFor="file-input"
                        style={
                          previewImage
                            ? { backgroundImage: `url(${previewImage})` }
                            : {}
                        }
                      >
                        <FileInputImage
                          style={previewImage ? { display: `none` } : {}}
                          src={addMedia}
                          alt="upload file"
                        />
                      </FileInputLabel>
                      <FileInput
                        {...register("image")}
                        type="file"
                        id="file-input"
                        accept="image/*"
                        onChange={handleFileInputChange}
                      />
                    </FileInputWrapper>
                    <NameInput
                      {...register("name")}
                      placeholder="Group name"
                      autoComplete="off"
                    />
                  </InformationWrapper>
                  <ButtonWrapper>
                    <Button
                      variant="primary"
                      size="small"
                      onClick={(event) => {
                        event.preventDefault();
                        trigger("name").then((isName) => {
                          if (isName) setCurrentPage(2);
                        });
                      }}
                    >
                      Next
                    </Button>
                  </ButtonWrapper>
                </>
              ),
              "2": (
                <>
                  <AddUsersToChat
                    handleCollectChildData={handleCollectChildData}
                    activeChilds={convertCollectedChildData(childData.current)}
                  />
                  <ButtonWrapper>
                    <Button variant="primary" size="small" type="submit">
                      Create
                    </Button>
                  </ButtonWrapper>
                </>
              ),
            }[currentPage]
          }
          <ErrorWrapper>
            <ErrorsSummary errors={errors as FieldErrors} />
          </ErrorWrapper>
        </FormWrapper>
      </CreateChatModalWrapper>
    </>
  );
}
