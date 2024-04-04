import css from "./ImageModal.module.css";

const ImageModal = ({ regular, onClose }) => {
  return (
    <>
      <div className={css.backdrop} onClick={onClose}>
        <div className={css.modal}>
          <img src={regular} alt="" className={css.image} />
        </div>
      </div>
    </>
  );
};

export default ImageModal;
