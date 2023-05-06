import Calendar from "@/components/calendar/Calendar";
import MainLayout from "@/components/layout/MainLayout";

/**
 * カレンダー画面.
 *
 * @returns {JSX.Element} カレンダー画面.
 */
const CalendarPage = () => {
  return (
    <MainLayout>
      <Calendar />
    </MainLayout>
  );
};

export default CalendarPage;
