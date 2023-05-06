import MainLayout from "@/components/layout/MainLayout";
import React from "react";
import Room from "@/components/model/Room";

/**
 * ホーム画面.
 *
 * @returns {JSX.Element} ホーム画面.
 */
const HomePage = () => {
  return (
    <MainLayout>
      <Room />
    </MainLayout>
  );
};

export default HomePage;
