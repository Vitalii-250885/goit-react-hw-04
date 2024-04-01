import css from "./ImageCard.module.css";

const ImageCard = ({ imageSmall }) => {
  return (
    <li className={css.card}>
      <img src={imageSmall} alt="" className={css.image} />
    </li>
  );
};

export default ImageCard;
