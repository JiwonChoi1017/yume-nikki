import { useContext, useRef, useState } from "react";

import { AuthContext } from "@/contexts/AuthContext";
import { Button } from "../ui/Button";
import { ErrorInfo } from "@/types/Error";
import { RESPONSE_STATUS } from "@/constants/globalConstant";
import UserForm from "../layout/UserForm";
import { useRouter } from "next/router";

/**
 * ログインフォーム.
 *
 * @returns {JSX.Element} ログインフォーム.
 */
const SignInForm = () => {
  // 各入力項目のref
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  // 活性/非活性状態
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  // エラー情報
  const [errorInfo, setErrorInfo] = useState<ErrorInfo | null>(null);
  // ルーター
  const router = useRouter();
  // ログインイベントハンドラ
  const { signInHandler } = useContext(AuthContext);
  // 送信イベント
  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // 入力漏れがある場合、何もせずリターン
    if (!emailRef.current || !passwordRef.current) {
      return;
    }
    // ログインイベントを発火させ、エラー情報を取得
    const errorInfo = await signInHandler({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
    setErrorInfo(errorInfo);
    // ログインに成功した場合、カレンダーへ移動
    if (errorInfo && errorInfo.status === RESPONSE_STATUS.SUCCESS) {
      router.push("/calendar");
    }
  };
  // ユーザー登録ボタンクリックイベントハンドラ
  const onClickSignUpButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    // ユーザー登録画面に遷移
    router.push("/sign-up");
  };
  // 入力変更イベントハンドラ
  const onChangeInputHandler = () => {
    if (!emailRef.current || !passwordRef.current) return;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // 活性/非活性状態を更新
    setIsDisabled(!email || !password || password.length < 10);
  };
  // エラーメッセージ
  const errorMsg = errorInfo?.status === RESPONSE_STATUS.ERROR && (
    <p className="errorMsg">{errorInfo.message}</p>
  );

  return (
    <UserForm title="ログイン" onSubmitHandler={onSubmitHandler}>
      {errorMsg}
      <div>
        <label htmlFor="email">メールアドレス</label>
        <input
          ref={emailRef}
          id="email"
          name="email"
          type="text"
          maxLength={254}
          onChange={onChangeInputHandler}
        />
      </div>
      <div>
        <label htmlFor="password">パスワード</label>
        <input
          ref={passwordRef}
          id="password"
          name="password"
          type="password"
          onChange={onChangeInputHandler}
        />
      </div>
      <Button text="ログイン" isSubmit={true} isDisabled={isDisabled} />
      <Button text="新規登録" clickHandler={onClickSignUpButtonHandler} />
    </UserForm>
  );
};

export default SignInForm;
