import { ReactNode } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDialogStore } from "../store/dialog";
import { useTranslation } from "react-i18next";

interface DialogProps {
  title?: string;
  content?: ReactNode | string;
}

export default function Dialog({
  title = "Generic Title",
  content = "Generic Content",
}: DialogProps) {
  const { t } = useTranslation();
  const { show, setShow } = useDialogStore();
  return (
    <>
      <Modal centered show={show} onHide={() => setShow(!show)}>
        <ModalHeader closeButton>
          <strong>{t("dialog.title")}</strong>
        </ModalHeader>
        <ModalBody>{content}</ModalBody>
      </Modal>
    </>
  );
}
