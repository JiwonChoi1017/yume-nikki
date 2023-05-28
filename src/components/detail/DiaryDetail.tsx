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
  const { id, title, content, tagList } = diaryInfo;
  // タグ要素
  const tagElement = (
    <div>
      {tagList.map((tag, index) => {
        return <span key={index}>{tag}</span>;
      })}
    </div>
  );

  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      {tagElement}
      <Link href={`/form/?id=${id}`}>修正</Link>
      <p onClick={onClickDeleteButtonHandler}>削除</p>
    </div>
  );
};

export default DiaryDetail;
