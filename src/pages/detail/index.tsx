import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/contexts/AuthContext";
import { DETAIL_QUERY_COUNT } from "@/constants/globalConstant";
import { DateHelper } from "@/helpers/date-helper";
import { Diary } from "@/types/Diary";
import DiaryDetail from "@/components/detail/DiaryDetail";
import { DiaryHelper } from "@/helpers/diary-helper";
import { GetServerSideProps } from "next";
import MainLayout from "@/components/layout/MainLayout";
import { useRouter } from "next/router";

/** Props. */
interface Props {
  /** (任意)id. */
  id?: string;
}

/**
 * 詳細画面.
 *
 * @param {Props} Props
 * @returns {JSX.Element} 詳細画面.
 */
const DetailPage = ({ id }: Props) => {
  // 現在のユーザーid
  const { currentUserId } = useContext(AuthContext);
  // ルーター
  const router = useRouter();
  // 日記情報
  const [diaryInfo, setDiaryInfo] = useState<Diary>({
    id: "",
    date: new Date(),
    year: "",
    month: "",
    title: "",
    content: "",
    tagList: [],
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  useEffect(() => {
    // 日記id、もしくはユーザーidが存在しない場合、404にリダイレクトさせる
    if (!id || !currentUserId) {
      router.replace("/404");
      return;
    }

    // 日記関連ヘルパー
    const diaryHelper = new DiaryHelper();
    // 日付関連ヘルパー
    const dateHelper = new DateHelper();

    // 日記を取得
    diaryHelper.fetchDiary(currentUserId, id).then((doc) => {
      const data = doc.data();
      // 日記を取得できなかった場合、404にリダイレクトさせる
      if (!data) {
        router.replace("/404");
        return;
      }
      const { year, month, title, content, tagList } = data as Diary;
      // 各日付のDate型への変換を行う
      const date = dateHelper.convertTimestampToDate(data, "date");
      const createdAt = dateHelper.convertTimestampToDate(data, "createdAt");
      const updatedAt = dateHelper.convertTimestampToDate(data, "updatedAt");
      setDiaryInfo({
        id: doc.id,
        date: date ?? new Date(),
        year,
        month,
        title,
        content,
        tagList,
        createdAt: createdAt ?? new Date(),
        updatedAt: updatedAt ?? new Date(),
      });
    });
  }, [router, id, currentUserId]);

  return (
    <MainLayout>
      <DiaryDetail diaryInfo={diaryInfo} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context) {
    return { props: {} };
  }

  // contextから遷移元の情報を取得
  const id = context.query?.id ?? null;

  return { props: { id } };
};

export default DetailPage;
