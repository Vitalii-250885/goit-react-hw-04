import { BiSearch } from 'react-icons/bi';
import toast from 'react-hot-toast';

import css from './SearchBar.module.css';

const SearchBar = ({ handleUpdatePage }) => {
  const hendleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { input } = form.elements;
    const query = input.value;

    if (query === '') {
      notification();
      return;
    }

    handleUpdatePage(query);
  };

  const notification = () => toast.error('Для пошуку введіть щось!');

  return (
    <header className={css.header}>
      <form onSubmit={hendleSubmit}>
        <button type="submit" className={css.button}>
          <BiSearch />
        </button>

        <input
          name="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
      </form>
    </header>
  );
};

export default SearchBar;
