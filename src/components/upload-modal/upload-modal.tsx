import { zodResolver } from "@hookform/resolvers/zod";
import { doc, updateDoc } from "firebase/firestore";
import { useState } from "react";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { db } from "@/firebase";
import { useAppSelector } from "@/hooks/redux";
import { getUserSelector } from "@/redux/selectors/user-selectors";
import { Button } from "@/ui/buttons";
import { uploadFile } from "@/utils/firebase/helpers";
import { queryUserEqualByValue } from "@/utils/firebase/helpers";

import { schema } from "./form-schema";
import {
  ConfirmationButtonsWrapper,
  PlaceholderText,
  PreviewImage,
  UploadButton,
  UploadInput,
  Wrapper,
} from "./styled";

type UploadModalProps = {
  handleModalClose: () => void;
  placeholder?: string;
  toastMessage?: string;
  uploadType: string;
};

type Data = {
  image: FileList | null;
};

export function UploadModal({
  handleModalClose,
  placeholder,
  toastMessage,
  uploadType,
}: UploadModalProps) {
  const { uid } = useAppSelector(getUserSelector);
  const [previewImage, setPreviewImage] = useState<string>();

  const { register, handleSubmit, reset } = useForm<Data>({
    defaultValues: {
      image: null,
    },
    resolver: zodResolver(schema),
  });

  const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

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

  const getUploadedImageName = async (images: FileList | null) => {
    return images ? await uploadFile("users", images[0]) : null;
  };

  const sendData = async (formData: Data) => {
    console.log(formData);
    const imageName = await getUploadedImageName(formData.image);
    console.log(imageName);
    const userSnapshot = await queryUserEqualByValue("uid", uid);
    const userRef = doc(db, "users", userSnapshot.docs[0].id);

    updateDoc(userRef, {
      [uploadType]: imageName,
    });
    reset();
    toast.success(toastMessage);
    handleModalClose();
  };

  const handleCancel = () => {
    setPreviewImage("");
  };

  return (
    <Wrapper onSubmit={handleSubmit(sendData)}>
      {previewImage ? (
        <>
          <PreviewImage src={previewImage} alt="preview" />
          <ConfirmationButtonsWrapper>
            <Button variant="primary" size="medium" type="submit">
              Submit
            </Button>
            <Button variant="secondary" size="medium" onClick={handleCancel}>
              Cancel
            </Button>
          </ConfirmationButtonsWrapper>
        </>
      ) : (
        <>
          <PlaceholderText>{placeholder}</PlaceholderText>
          <UploadButton htmlFor="uploadInput">Upload</UploadButton>
          <UploadInput
            {...register("image")}
            type="file"
            id="uploadInput"
            accept="image/*"
            onChange={handleFileInputChange}
          />
        </>
      )}

      {/* <input type="file" accept="image/*" onChange={handleFileInputChange} /> */}
    </Wrapper>
  );
}
