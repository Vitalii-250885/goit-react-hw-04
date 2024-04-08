import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ hendleLoadMore }) => {
  return (
    <button type="submit" className={css.button} onClick={hendleLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
