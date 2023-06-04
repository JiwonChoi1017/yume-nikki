import Menu from "./Menu";
import classes from "@/styles/Book.module.css";

/** Props. */
interface Props {
  /** 左ページ. */
  leftPage: React.ReactNode;
  /** 右ページ. */
  rightPage: React.ReactNode;
}

/**
 * 本.
 *
 * @param {Props} Props
 * @returns {JSX.Element} 本.
 */
const Book = ({ leftPage, rightPage }: Props) => {
  return (
    <div className={classes.bookWrap}>
      <Menu />
      <div className={classes.cover}>
        <div className={classes.book}>
          {/* 左ページ */}
          <label className={classes.page}>
            <div className={classes.content}>{leftPage}</div>
          </label>
          {/* 右ページ */}
          <label className={classes.page}>
            <div className={classes.content}>{rightPage}</div>
          </label>
        </div>
      </div>
      <div className="width__10per" />
    </div>
  );
};

export default Book;
