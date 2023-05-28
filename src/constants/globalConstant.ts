/** レスポンスステータス. */
export const RESPONSE_STATUS = {
  /** 成功. */
  SUCCESS: "success",
  /** エラー. */
  ERROR: "error",
} as const;

/** エラー種別. */
export const ERROR_KIND = {
  /** 該当ユーザーが存在しない. */
  NOT_FOUND_USER: "not_found_user",
  /** 該当日記が存在しない. */
  NOT_FOUND_DIARY: "not_found_diary",
} as const;

/** 一覧のクエリ数. */
export const LIST_QUERY_COUNT = 2 as const;
