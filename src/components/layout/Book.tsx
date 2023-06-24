import { PageKind } from "@/types/Common";
import SideMenu from "./SideMenu";
import classes from "@/styles/Book.module.css";

/** Props. */
interface Props {
  /** 左ページ. */
  leftPage: React.ReactNode;
  /** 右ページ. */
  rightPage: React.ReactNode;
  /** 現在のページ. */
  currentPage: PageKind;
}

/**
 * 本.
 *
 * @param {Props} Props
 * @returns {JSX.Element} 本.
 */
const Book = ({ leftPage, rightPage, currentPage }: Props) => {
  return (
    <div className={classes.bookWrap}>
      <SideMenu currentPage={currentPage} />
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
      <div className="width__7per" />
    </div>
  );
};

export default Book;
