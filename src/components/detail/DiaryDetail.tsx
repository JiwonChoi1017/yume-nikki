import Book from "../layout/Book";
import { Diary } from "@/types/Diary";
import Link from "next/link";

/** Props. */
interface Props {
  /** 日記情報. */
  diaryInfo: Diary;
  /** 削除ボタンクリックイベントハンドラ. */
  onClickDeleteButtonHandler: () => void;
}

/**
 * 日記詳細.
 *
 * @param {Props} Props
 * @returns {JSX.Element} 日記詳細.
 */
const DiaryDetail = ({ diaryInfo, onClickDeleteButtonHandler }: Props) => {
  const { id, date, title, content, tagList } = diaryInfo;
  // タグ要素
  const tagElement = (
    <div>
      {tagList.map((tag, index) => {
        return <span key={index}>{tag}</span>;
      })}
    </div>
  );

  return (
    <Book
      leftPage={
        <>
          <h2>{date.toLocaleDateString()}</h2>
          <h2>{title}</h2>
          {tagElement}
        </>
      }
      rightPage={
        <>
          <Link href={`/form/?id=${id}`}>修正</Link>
          <p onClick={onClickDeleteButtonHandler}>削除</p>
          <p>{content}</p>
        </>
      }
      currentPage="detail"
    />
  );
};

export default DiaryDetail;
