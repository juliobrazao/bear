import { create } from "zustand";
import { DialogAction, DialogState } from "../models/dialog";

export const useDialogStore = create<DialogState & DialogAction>((set) => ({
  show: false,
  setShow: (show) =>
    set(() => ({
      show,
    })),
}));
