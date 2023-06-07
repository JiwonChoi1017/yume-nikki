import { FaCalendarAlt, FaPlus, FaUserAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/contexts/AuthContext";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import classes from "@/styles/SideMenu.module.css";
import { useRouter } from "next/router";

/**
 * サイドメニュー.
 *
 * @returns {JSX.Element} サイドメニュー.
 */
const SideMenu = () => {
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
    <ul className={`${classes.sideMenu} width__10per`}>
      <li>
        <Link href="/form">
          <FaPlus />
        </Link>
      </li>
      <li>
        <Link href={`/calendar/${year}/${month}`}>
          <FaCalendarAlt />
        </Link>
      </li>
      <li onClick={isSignIn ? onClickSignOutHandler : onClickSignInIconHandler}>
        <FaUserAlt />
      </li>
      <li className={classes.closeLink} onClick={onClickCloseLinkHandler}>
        <IoClose className={classes.icon} />
        <span>閉じる</span>
      </li>
    </ul>
  );
};

export default SideMenu;
