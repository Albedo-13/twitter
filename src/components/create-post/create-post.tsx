import addMedia from "@/assets/icons/add-media.svg";
import noAvatar from "@/assets/imgs/no_avatar.svg";
import { Button } from "@/ui/buttons/buttons";

import { Avatar } from "../avatar/avatar";
import {
  BasementWrapper,
  CreatePostWrapper,
  FileInput,
  FileInputImage,
  FileInputWrapper,
  FormWrapper,
  Textarea,
} from "./styled";
export function CreatePost() {
  return (
    <CreatePostWrapper>
      <Avatar src={noAvatar} />
      <FormWrapper>
        <Textarea placeholder="What's happening" />
        <BasementWrapper>
          <FileInputWrapper>
            <label htmlFor="file-input">
              <FileInputImage src={addMedia} alt="upload file" />
            </label>
            <FileInput
              type="file"
              id="file-input"
              accept="image/png, image/jpeg"
            />
          </FileInputWrapper>
          <Button $variant="primary" $size="small" type="submit">
            Tweet
          </Button>
        </BasementWrapper>
      </FormWrapper>
    </CreatePostWrapper>
  );
}
