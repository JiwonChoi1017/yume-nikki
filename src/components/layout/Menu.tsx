import { FaCalendarAlt, FaPlus, FaUserAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import classes from "@/styles/Menu.module.css";
import { useRouter } from "next/router";

/**
 * メニュー.
 *
 * @returns {JSX.Element} メニュー.
 */
const Menu = () => {
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

  return (
    <ul className={`${classes.menu} width__10per`}>
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
    </ul>
  );
};

export default Menu;