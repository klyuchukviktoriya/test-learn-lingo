import ReactModal from "react-modal";
import { useEffect } from "react";
import css from "./Modal.module.css";

ReactModal.setAppElement("#root");

export default function Modal({
  isOpen,
  onClose,
  children,
  width = "566px",
  title,
  description,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.modalOverlay}
      style={{
        content: {
          width,
        },
      }}
    >
      <button className={css.modalCloseButton} onClick={onClose}>
        <svg width="32" height="32" className={css.closeIcon}>
          <use href="/sprite.svg#close" />
        </svg>
      </button>

      {title && <h2 className={css.modalTitle}>{title}</h2>}
      {description && <p className={css.modalDescription}>{description}</p>}
      {children}
    </ReactModal>
  );
}
