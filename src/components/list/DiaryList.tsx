import { Diary } from "@/types/Diary";
import DiaryItem from "./DiaryItem";
import classes from "@/styles/DiaryList.module.css";

/** Props. */
interface Props {
  /** 読み込み中か. */
  isLoading: boolean;
  /** 日記リスト. */
  diaryList: Diary[];
}

/**
 * 日記リスト.
 *
 * @param {Props} Props.
 * @returns {JSX.Element} 日記リスト.
 */
const DiaryList = ({ isLoading, diaryList }: Props) => {
  const diaryListElement = isLoading ? (
    <></>
  ) : (
    <ul className={classes.diaryList}>
      {diaryList.map((diary) => {
        return <DiaryItem key={diary.id} diary={diary} />;
      })}
    </ul>
  );

  return diaryListElement;
};

export default DiaryList;
