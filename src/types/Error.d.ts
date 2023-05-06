import { RESPONSE_STATUS, ERROR_KIND } from "@/constants/globalConstant";

/** レスポンスステータス. */
export type ResponseStatus = keyof typeof RESPONSE_STATUS;

/** エラー情報. */
export type ErrorInfo = {
  /** ステータス. */
  status: string;
  /** (任意)コード. */
  code?: string;
  /** (任意)種別. */
  kind?: string;
  /** (任意)メッセージ. */
  message?: string;
};

/** エラー種別. */
export type ErrorKind = keyof typeof ERROR_KIND;
