import css from "./ImageModal.module.css";

import Modal from "react-modal";

const ImageModal = ({ regular, modalIsOpen, closeModal }) => {
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className={css.modal}
      >
        <div className={css.backdrop} onClick={closeModal}>
          <div className={css.modal}>
            <img src={regular} alt="" className={css.image} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ImageModal;
