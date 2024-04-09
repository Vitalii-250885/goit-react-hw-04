import css from './ImageModal.module.css';

import ReactModal from 'react-modal';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ regular, modalIsOpen, closeModal }) => {
  return (
    <>
      <ReactModal isOpen={modalIsOpen} onRequestClose={closeModal} className={css.modal}>
        <div className={css.backdrop} onClick={closeModal}>
          <div className={css.modal}>
            <img src={regular} alt="" className={css.image} />
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default ImageModal;
