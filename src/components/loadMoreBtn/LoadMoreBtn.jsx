import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => {
  return (
    <div className={css.button} onClick={onClick}>
      Load more
    </div>
  );
};

export default LoadMoreBtn;
