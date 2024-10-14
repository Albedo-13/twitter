import { CreateMessageWrapper, Input, Send } from "./styled";

export function CreateMessage() {
  return (
    <CreateMessageWrapper>
      <Input
        onInput={({ target }: any) => {
          target.style.height = "auto";
          target.style.height = `${target.scrollHeight}px`;
        }}
      />
      <Send />
    </CreateMessageWrapper>
  );
}
