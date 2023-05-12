import { Diary } from "@/types/Diary";

/** Props. */
interface Props {
  /** 日記情報. */
  diaryInfo: Diary;
}

/**
 * 日記詳細.
 *
 * @param {Props} Props
 * @returns {JSX.Element} 日記詳細.
 */
const DiaryDetail = ({ diaryInfo }: Props) => {
  const { title, content, tagList } = diaryInfo;
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
    </div>
  );
};

export default DiaryDetail;
