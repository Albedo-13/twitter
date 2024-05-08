export const modalRoot = document.getElementById("modal-root");

export const shouldDisableScroll = (isModalOpen: boolean) => {
  document.body.style.overflow = isModalOpen ? "hidden" : "visible";
};

export enum GENDERS {
  "Male" = "Male",
  "Female" = "Female",
}
