import { PropsWithChildren } from "react";
import { createPortal } from "react-dom";

import { modalRoot } from "@/constants/modal-helpers";

export function ModalPortal({ children }: PropsWithChildren) {
  return createPortal(
    children,
    modalRoot as HTMLElement
  );
}
