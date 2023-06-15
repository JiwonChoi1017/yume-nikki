import { AddDiaryButton } from "../ui/Button";
import { Diary } from "@/types/Diary";
import DiaryItem from "./DiaryItem";
import Loader from "../ui/Loader";
import classes from "@/styles/DiaryList.module.css";
import { useRouter } from "next/router";

/** Props. */
interface Props {
  /** 読み込み中か. */
  isLoading: boolean;
  /** 日記リスト. */
  diaryList: Diary[];
  /** 日記リストを表示するか. */
  showDiaryList: boolean;
}

/**
 * 日記リスト.
 *
 * @param {Props} Props.
 * @returns {JSX.Element} 日記リスト.
 */
const DiaryList = ({ isLoading, diaryList, showDiaryList }: Props) => {
  // ルーター
  const router = useRouter();

  // フォーム画面遷移イベントハンドラ
  const moveToFormPage = () => {
    router.push("/form");
  };

  // 読み込み中アニメーション要素
  const loaderElement = isLoading && (
    <ul className={classes.diaryList}>
      <Loader />
    </ul>
  );
  // 日記リスト要素
  const diaryListElement = !showDiaryList ? (
    <div>
      <p className={classes.notExistMessage}>
        夢日記が見つかりませんでした。
        <br />
        新しい夢日記を追加してください。
      </p>
      <AddDiaryButton text="夢日記を作成" clickHandler={moveToFormPage} />
    </div>
  ) : (
    <ul className={classes.diaryList}>
      {diaryList.map((diary) => {
        return <DiaryItem key={diary.id} diary={diary} />;
      })}
      <AddDiaryButton text="夢日記を作成" clickHandler={moveToFormPage} />
    </ul>
  );
  return (
    <div className={classes.diaryListWrap}>
      <span className={classes.index}>日記リスト</span>
      {loaderElement}
      {!isLoading && diaryListElement}
    </div>
  );
};

export default DiaryList;
