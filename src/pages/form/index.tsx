import { AuthContext } from "@/contexts/AuthContext";
import { Diary } from "@/types/Diary";
import DiaryForm from "@/components/form/DiaryForm";
import MainLayout from "@/components/layout/MainLayout";
import { useContext } from "react";

/**
 * フォーム画面.
 *
 * @returns {JSX.Element} フォーム画面.
 */
const FormPage = () => {
  // 現在のユーザーid
  const { currentUserId } = useContext(AuthContext);

  // 日記追加イベントハンドラ
  const addDiaryHandler = async (diary: Omit<Diary, "modifiedAt">) => {
    // 現在のユーザーidが存在しない場合、早期リターン
    if (!currentUserId) {
      return;
    }
    console.log(diary);
  };

  return (
    <MainLayout>
      <DiaryForm addDiaryHandler={addDiaryHandler} />
    </MainLayout>
  );
};

export default FormPage;
