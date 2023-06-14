import { FaCalendarAlt, FaPlus, FaUserAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/contexts/AuthContext";
import { IoClose } from "react-icons/io5";
import { PageKind } from "@/types/Common";
import classes from "@/styles/SideMenu.module.css";
import { useRouter } from "next/router";

/** Props. */
interface Props {
  /** 現在のページ. */
  currentPage: PageKind;
}

/**
 * サイドメニュー.
 *
 * @param {Props} Props
 * @returns {JSX.Element} サイドメニュー.
 */
const SideMenu = ({ currentPage }: Props) => {
  // 現在の年月を取得
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  // ログイン中か
  const [isSignIn, setIsSignIn] = useState<boolean>(false);
  // ログアウトイベントハンドラ、現在のユーザー
  const { signOutHandler, currentUser } = useContext(AuthContext);
  // ルーター
  const router = useRouter();

  useEffect(() => {
    setIsSignIn(!!currentUser);
  }, [currentUser]);

  // 追加アイコンのクリックイベントハンドラ
  const onClickAddIconHanlder = () => {
    router.push("/form");
  };
  // カレンダーアイコンのクリックイベントハンドラ
  const onClickCalendarIconHanlder = () => {
    router.push(`/calendar/${year}/${month}`);
  };
  // ログインアイコンのクリックイベントハンドラ
  const onClickSignInIconHandler = () => {
    router.push("/sign-in");
  };
  // ログアウトアイコンのクリックイベントハンドラ
  const onClickSignOutHandler = async () => {
    // await signOutHandler();
    // setIsSignIn(!!currentUser);
    // router.push("/");
    router.push("/my");
  };
  // 閉じるリンクのクリックイベントハンドラ
  const onClickCloseLinkHandler = () => {
    router.push("/");
  };

  return (
    <ul className={classes.sideMenu}>
      <li
        className={`${currentPage === "diaryForm" ? classes.active : ""}`}
        onClick={onClickAddIconHanlder}
      >
        <FaPlus className={classes.icon} />
        <span>夢日記を作成</span>
      </li>
      <li
        className={`${currentPage === "calendar" ? classes.active : ""}`}
        onClick={onClickCalendarIconHanlder}
      >
        <FaCalendarAlt className={classes.icon} />
        <span>カレンダー</span>
      </li>
      <li
        className={`${
          currentPage === "signIn" ||
          currentPage === "signUp" ||
          currentPage === "my"
            ? classes.active
            : ""
        }`}
        onClick={isSignIn ? onClickSignOutHandler : onClickSignInIconHandler}
      >
        <FaUserAlt className={classes.icon} />
        <span>{isSignIn ? "マイページ" : "ログイン"}</span>
      </li>
      <li
        className={`${classes.closeLink} ${classes.active}`}
        onClick={onClickCloseLinkHandler}
      >
        <IoClose className={classes.closeIcon} />
        <span>閉じる</span>
      </li>
    </ul>
  );
};

export default SideMenu;
