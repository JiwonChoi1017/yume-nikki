import {
  DocumentData,
  DocumentSnapshot,
  QuerySnapshot,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
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
      collection(db, currentUserId),
      where("year", "==", year.toString()),
      where("month", "==", month.toString())
    );
    return await getDocs(fetchAllQuery);
  }

  /**
   * 日記を取得.
   *
   * @param {string} currentUserId - 現在のユーザーid
   * @param {string} id - id
   * @returns {Promise<DocumentSnapshot<DocumentData>>} 日記データ.
   */
  async fetchDiary(
    currentUserId: string,
    id: string
  ): Promise<DocumentSnapshot<DocumentData>> {
    const diaryRef = doc(db, currentUserId, id);
    return await getDoc(diaryRef);
  }

  /**
   * 日記を追加.
   *
   * @param {string} currentUserId - 現在のユーザーid
   * @param {Omit<Diary, "id" | "updatedAt">} diary - 日記
   */
  async addDiary(
    currentUserId: string,
    diary: Omit<Diary, "id" | "updatedAt">
  ) {
    const { date, year, month, title, content, tagList, createdAt } = diary;

    return await addDoc(collection(db, currentUserId), {
      date,
      year,
      month,
      title,
      content,
      tagList,
      createdAt,
    });
  }

  /**
   * 日記を更新.
   *
   * @param {string} currentUserId - 現在のユーザーid
   * @param {Omit<Diary, "createdAt">} diary - 日記
   */
  async updateDiary(currentUserId: string, diary: Omit<Diary, "createdAt">) {
    const { id, date, year, month, title, content, tagList, updatedAt } = diary;
    const diaryRef = doc(db, currentUserId, id);

    return await updateDoc(diaryRef, {
      date,
      year,
      month,
      title,
      content,
      tagList,
      updatedAt,
    });
  }

  /**
   * 日記を削除.
   *
   * @param {string} currentUserId - 現在のユーザーid
   * @param {string} id - id
   */
  async deleteDiary(currentUserId: string, id: string) {
    const diaryRef = doc(db, currentUserId, id);

    return await deleteDoc(diaryRef);
  }
}
