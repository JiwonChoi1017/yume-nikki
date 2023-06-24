import classes from "@/styles/Loader.module.css";

/** Props. */
interface Props {
  /** (任意)遷移元がトップ画面か. */
  isFromTop?: boolean;
}

/**
 * 読み込み中アニメーション.
 *
 * @param {Props} props
 * @returns {JSX.Element} 読み込み中アニメーション.
 */
const Loader = ({ isFromTop = false }: Props) => {
  return (
    <span
      className={`${classes.loader} ${isFromTop && classes.mainLoader}`}
    ></span>
  );
};

export default Loader;
