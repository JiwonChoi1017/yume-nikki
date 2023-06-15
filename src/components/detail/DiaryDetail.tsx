import Book from "../layout/Book";
import { Diary } from "@/types/Diary";
import { DoubleButton } from "../ui/Button";
import classes from "@/styles/DiaryDetail.module.css";
import { useRouter } from "next/router";

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
 * @param {Props} props
 * @returns {JSX.Element} 日記詳細.
 */
const DiaryDetail = ({ diaryInfo, onClickDeleteButtonHandler }: Props) => {
  const { id, date, title, content, tagList } = diaryInfo;
  // ルーター
  const router = useRouter();

  // 修正ボタンのクリックイベントハンドラ
  const onClickModifyButtonHanlder = () => {
    router.push(`/form/?id=${id}`);
  };

  // タグ要素
  const tagElement = (
    <div className={classes.tagWrap}>
      {tagList.map((tag, index) => {
        return (
          <span key={index} className={classes.tag}>
            {tag}
          </span>
        );
      })}
    </div>
  );

  return (
    <Book
      leftPage={
        <div className={classes.titleWrap}>
          <div>
            <span className={classes.date}>
              {new Intl.DateTimeFormat("ja-JP").format(date)}
            </span>
            <span className={classes.title}>{title}</span>
            {tagElement}
          </div>
        </div>
      }
      rightPage={
        <div className={classes.contentWrap}>
          <p className={classes.content}>{content}</p>
          <DoubleButton
            button={{
              first: {
                text: "修正",
                clickHandler: onClickModifyButtonHanlder,
              },
              second: {
                text: "削除",
                clickHandler: onClickDeleteButtonHandler,
              },
            }}
          />
        </div>
      }
      currentPage="detail"
    />
  );
};

export default DiaryDetail;
