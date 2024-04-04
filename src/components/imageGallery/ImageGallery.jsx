import ImageCard from "../imageGallery/imageCard/ImageCard";

import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, handleShowModal }) => {
  return (
    <ul className={css.list}>
      {images.map(({ id, urls: { small, regular } }) => (
        <ImageCard
          key={id}
          small={small}
          regular={regular}
          handleShowModal={handleShowModal}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
