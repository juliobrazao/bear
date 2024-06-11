export type DialogState = {
  show: boolean;
};

export type DialogAction = {
  setShow: (show: DialogState["show"]) => void;
};
