import { DocumentData, Timestamp } from "firebase/firestore";

/**
 * 日付関連ヘルパー.
 */
export class DateHelper {
  /**
   * Timestamp型の日付をDate型へ変換.
   *
   * @param {DocumentData} data - データ
   * @param {string} targetPropertyName - ターゲットプロパティ名
   * @returns {Date | undefined} Date型の日付.
   */
  convertTimestampToDate(
    data: DocumentData,
    targetPropertyName: string
  ): Date | undefined {
    // 該当プロパティが存在しない場合は早期リターン
    if (!data[targetPropertyName]) {
      return;
    }

    const dateTimestamp = new Timestamp(
      data[targetPropertyName].seconds,
      data[targetPropertyName].nanoseconds
    );

    return dateTimestamp.toDate();
  }
}
