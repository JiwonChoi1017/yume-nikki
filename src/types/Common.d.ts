/** 年月. */
export type YearMonth = {
  /** 年. */
  year: string;
  /** 月. */
  month: string;
};

/** ページ種別. */
export type PageKind =
  | "main"
  | "diaryForm"
  | "calendar"
  | "signIn"
  | "signUp"
  | "my"
  | "detail";
