import { GetServerSideProps } from "next";

/**
 * カレンダーデフォルト画面.
 *
 * @returns {JSX.Element} カレンダーデフォルト画面.
 */
const CalendarDefaultPage = () => {};

export default CalendarDefaultPage;

export const getServerSideProps: GetServerSideProps = async () => {
  // 現在の年月を取得
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

  return {
    redirect: {
      // 301: 永続的なリダイレクトに使用
      statusCode: 301,
      destination: `/calendar/${year}/${month}`,
    },
  };
};
