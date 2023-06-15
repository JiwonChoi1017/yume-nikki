import { Diary } from "@/types/Diary";
import classes from "@/styles/DiaryItem.module.css";
import { useRouter } from "next/router";

/** Props. */
interface Props {
  /** 日記. */
  diary: Diary;
}

/**
 * 日記.
 *
 * @param {Props} props
 * @returns {JSX.Element} 日記.
 */
const DiaryItem = ({ diary }: Props) => {
  const { id, date, title, tagList } = diary;
  // ルーター
  const router = useRouter();
  //　詳細ページに遷移
  const moveToDetailPage = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();

    router.push(`/detail?id=${id}`);
  };

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
    <li className={classes.diaryItem} onClick={moveToDetailPage}>
      <div>
        <span className={classes.date}>{date.toLocaleDateString()}</span>
        <span className={classes.title}>{title}</span>
        {tagElement}
      </div>
    </li>
  );
};

export default DiaryItem;
