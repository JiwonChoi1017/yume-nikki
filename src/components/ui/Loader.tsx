import classes from "@/styles/Loader.module.css";

/**
 * 読み込み中アニメーション.
 *
 * @returns {JSX.Element} 読み込み中アニメーション.
 */
const Loader = () => {
  return <span className={classes.loader}></span>;
};

export default Loader;
