import {
  DocumentData,
  QuerySnapshot,
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";

import { Diary } from "@/types/Diary";
import { db } from "../../firebase-config";

/**
 * 日記関連ヘルパー.
 */
export class DiaryHelper {
  /**
   * 全ての日記を取得.
   *
   * @param {string} currentUserId - 現在のユーザーid
   * @param {string[]} diaryQuery - (任意)クエリ
   * @returns {Promise<QuerySnapshot<DocumentData>>} 全ての日記データ.
   */
  async fetchAllDiary(
    currentUserId: string,
    diaryQuery?: string[]
  ): Promise<QuerySnapshot<DocumentData>> {
    const now = new Date();
    const year = diaryQuery?.[0] ?? now.getFullYear().toString();
    const month = diaryQuery?.[1] ?? now.getMonth().toString();

    const fetchAllQuery = query(
      collection(db, currentUserId, year.toString(), month.toString())
    );
    return await getDocs(fetchAllQuery);
  }

  /**
   * 日記を取得.
   *
   * @param {string} currentUserId - 現在のユーザーid
   * @param {string[]} query - クエリ
   * @returns {Promise<DocumentData | undefined>} 日記データ.
   */
  async fetchDiary(
    currentUserId: string,
    query: string[]
  ): Promise<DocumentData | undefined> {
    const year = query[0];
    const month = query[1];
    const diaryId = query[2];

    const diaryRef = doc(db, currentUserId, year, month, diaryId);
    const diarySnapshot = await getDoc(diaryRef);

    return diarySnapshot.data();
  }

  /**
   * 日記を追加.
   *
   * @param {string} currentUserId - 現在のユーザーid
   * @param {Omit<Diary, "id" | "modifiedAt">} diary - 日記
   */
  async addDiary(
    currentUserId: string,
    diary: Omit<Diary, "id" | "modifiedAt">
  ) {
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
