import DreamSpace from "@/components/model/DreamSpace";
import Logo from "@/components/ui/Logo";
import { OpenDiaryButton } from "@/components/ui/Button";
import React from "react";
import { useRouter } from "next/router";

/**
 * ホーム画面.
 *
 * @returns {JSX.Element} ホーム画面.
 */
const HomePage = () => {
  // ルーター
  const router = useRouter();

  // 日記を開くイベントハンドラ
  const openDiaryHandler = () => {
    router.push("/calendar");
  };

  return (
    <>
      <DreamSpace />
      <Logo />
      <OpenDiaryButton text="日記帳を開く" clickHandler={openDiaryHandler} />
    </>
  );
};

export default HomePage;
