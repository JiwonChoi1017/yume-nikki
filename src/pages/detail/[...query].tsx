import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/contexts/AuthContext";
import { DETAIL_QUERY_COUNT } from "@/constants/globalConstant";
import { Diary } from "@/types/Diary";
import DiaryDetail from "@/components/detail/DiaryDetail";
import { DiaryHelper } from "@/helpers/diary-helper";
import MainLayout from "@/components/layout/MainLayout";
import { useRouter } from "next/router";

/**
 * 詳細画面.
 *
 * @returns {JSX.Element} 詳細画面.
 */
const DetailPage = () => {
  // 現在のユーザーid
  const { currentUserId } = useContext(AuthContext);
  // ルーター
  const router = useRouter();
  // クエリ
  const { query } = router.query;
  // 日記情報
  const [diaryInfo, setDiaryInfo] = useState<Diary>({
    date: new Date(),
    year: "",
    month: "",
    title: "",
    content: "",
    tagList: [],
    createdAt: new Date(),
    modifiedAt: new Date(),
  });

  useEffect(() => {
    if (
      !Array.isArray(query) ||
      query?.length !== DETAIL_QUERY_COUNT ||
      !currentUserId
    ) {
      return;
    }

    // 日記関連ヘルパー
    const diaryHelper = new DiaryHelper();
    // 日記を取得
    diaryHelper.fetchDiary(currentUserId, query).then((data) => {
      // 日記を取得できなかった場合、404にリダイレクトさせる
      if (!data) {
        router.replace("/404");
        return;
      }
      setDiaryInfo({ ...(data as Diary) });
    });
  }, [router, query, currentUserId]);

  return (
    <MainLayout>
      <DiaryDetail diaryInfo={diaryInfo} />
    </MainLayout>
  );
};

export default DetailPage;
