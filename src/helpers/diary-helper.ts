import { addDoc, collection, doc, getDoc } from "firebase/firestore";

import { Diary } from "@/types/Diary";
import { db } from "../../firebase-config";

/**
 * 日記関連ヘルパー.
 */
export class DiaryHelper {
  /**
   * 日記を取得.
   *
   * @param {string} currentUserId - 現在のユーザーid
   * @param {string[]} query - クエリ
   */
  async fetchDiary(currentUserId: string, query: string[]) {
    const year = query[0];
    const month = query[1];
    const diaryId = query[2];

    const diaryRef = doc(db, currentUserId, year, month, diaryId);
    const diarySnap = await getDoc(diaryRef);

    return diarySnap.data();
  }

  /**
   * 日記を追加.
   *
   * @param {string} currentUserId - 現在のユーザーid
   * @param {Omit<Diary, "modifiedAt">} diary - 日記
   */
  async addDiary(currentUserId: string, diary: Omit<Diary, "modifiedAt">) {
    const { date, year, month, title, content, tagList, createdAt } = diary;

    return await addDoc(collection(db, currentUserId, year, month), {
      date,
      title,
      content,
      tagList,
      createdAt,
    });
  }
}
