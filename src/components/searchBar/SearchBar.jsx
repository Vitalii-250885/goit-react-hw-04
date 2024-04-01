import { BiSearch } from "react-icons/bi";

import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header className={css.header}>
      <form onSubmit={onSubmit}>
        <button className={css.button}>
          <BiSearch />
        </button>

        <input
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
