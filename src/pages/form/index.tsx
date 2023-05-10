import { AuthContext } from "@/contexts/AuthContext";
import { Diary } from "@/types/Diary";
import DiaryForm from "@/components/form/DiaryForm";
import { DiaryHelper } from "@/helpers/diary-helper";
import MainLayout from "@/components/layout/MainLayout";
import { useContext } from "react";
import { useRouter } from "next/router";

/**
 * フォーム画面.
 *
 * @returns {JSX.Element} フォーム画面.
 */
const FormPage = () => {
  // 現在のユーザーid
  const { currentUserId } = useContext(AuthContext);
  // ルーター
  const router = useRouter();
  // 日記関連ヘルパー
  const diaryHelper = new DiaryHelper();

  // 日記追加イベントハンドラ
  const addDiaryHandler = async (diary: Omit<Diary, "modifiedAt">) => {
    // 現在のユーザーidが存在しない場合、早期リターン
    if (!currentUserId) {
      return;
    }

    await diaryHelper
      .addDiary(currentUserId, diary)
      .then(() => {
        router.push("/calendar");
      })
      .catch();
  };

  return (
    <MainLayout>
      <DiaryForm addDiaryHandler={addDiaryHandler} />
    </MainLayout>
  );
};

export default FormPage;
