import css from "./Loader.module.css";

import { ThreeDots } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className={css.loader}>
      <ThreeDots
        visible={true}
        height="50"
        width="50"
        color="#4fa94d"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
