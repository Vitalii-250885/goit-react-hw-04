import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handleSubmit }) => {
  return (
    <button
      type="submit"
      className={css.button}
      onClick={() => {
        handleSubmit();
      }}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
