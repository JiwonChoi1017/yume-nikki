import { AuthContext } from "@/contexts/AuthContext";
import classes from "@/styles/MyPageMenu.module.css";
import { useContext } from "react";

/**
 * マイページメニュー.
 *
 * @returns {JSX.Element} マイページメニュー.
 */
const MyPageMenu = () => {
  // ログアウトイベントハンドラ
  const { signOutHandler } = useContext(AuthContext);

  // ログアウトリンクのクリックイベントハンドラ
  const onClickSignOutLinkHandler = async () => {
    await signOutHandler();
  };

  return (
    <div className={classes.myPageMenuWrap}>
      <div>
        <span className={classes.index}>マイページ</span>
      </div>
      <ul className={classes.myPageMenu}>
        <li className={classes.menu} onClick={onClickSignOutLinkHandler}>
          ログアウト
        </li>
      </ul>
    </div>
  );
};

export default MyPageMenu;
