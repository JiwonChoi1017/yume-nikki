/** 日記. */
export type Diary = {
  /** 日付. */
  date: Date;
  /** 年. */
  year: number;
  /** 月. */
  month: number;
  /** タイトル. */
  title: string;
  /** 内容. */
  content: string;
  /** タグリスト. */
  tagList: string[];
  /** 作成日. */
  createdAt: Date;
  /** 修正日. */
  modifiedAt: Date;
};
