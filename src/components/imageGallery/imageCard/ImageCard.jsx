import css from "./ImageCard.module.css";

const ImageCard = ({ small, regular, handleShowModal }) => {
  return (
    <li
      className={css.card}
      onClick={() => {
        handleShowModal(regular);
      }}
    >
      <img src={small} alt="" className={css.image} />
    </li>
  );
};

export default ImageCard;
