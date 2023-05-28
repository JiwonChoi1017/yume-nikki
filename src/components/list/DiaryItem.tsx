import { Diary } from "@/types/Diary";
import Link from "next/link";
import classes from "@/styles/DiaryItem.module.css";

/** Props. */
interface Props {
  /** 日記. */
  diary: Diary;
}

/**
 * 日記.
 *
 * @param {Props} Props.
 * @returns {JSX.Element} 日記.
 */
const DiaryItem = ({ diary }: Props) => {
  const { id, date, title, tagList } = diary;
  // タグ要素
  const tagElement = tagList.length > 0 && (
    <div className={classes.tagWrap}>
      {tagList.map((tag, idx) => (
        <span key={idx} className={classes.tag}>
          {tag}
        </span>
      ))}
    </div>
  );

  return (
    <li className={classes.diaryItem}>
      <Link href={`/detail?id=${id}`}>
        <h5 className={classes.date}>{date.toLocaleDateString()}</h5>
        <p className={classes.title}>{title}</p>
        {tagElement}
      </Link>
    </li>
  );
};

export default DiaryItem;
