import ImageCard from "../imageGallery/imageCard/ImageCard";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.list}>
      {images.map(({ id, urls: { small } }) => (
        <ImageCard key={id} imageSmall={small} />
      ))}
    </ul>
  );
};

export default ImageGallery;
