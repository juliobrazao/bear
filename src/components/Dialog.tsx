import { ReactNode } from "react";
import { Modal, ModalBody, ModalHeader } from "react-bootstrap";
import { useDialogStore } from "../store/dialog";

interface DialogProps {
  title?: string;
  content?: ReactNode | string;
}

export default function Dialog({
  title = "Generic Title",
  content = "Generic Content",
}: DialogProps) {
  const { show, setShow } = useDialogStore();
  return (
    <>
      <Modal centered show={show} onHide={() => setShow(!show)}>
        <ModalHeader closeButton>
          <strong>{title}</strong>
        </ModalHeader>
        <ModalBody>{content}</ModalBody>
      </Modal>
    </>
  );
}
