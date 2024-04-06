import css from "./ImageCard.module.css";

const ImageCard = ({ small, regular, openModal }) => {
  return (
    <li className={css.card}>
      <img
        src={small}
        alt=""
        className={css.image}
        onClick={() => {
          openModal(regular);
        }}
      />
    </li>
  );
};

export default ImageCard;
