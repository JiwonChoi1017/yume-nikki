import FullCalendar from "@fullcalendar/react";
import allLocales from "@fullcalendar/core/locales-all";
import dayGridPlugin from "@fullcalendar/daygrid";

/**
 * カレンダー.
 *
 * @returns {JSX.Element} カレンダー.
 */
const Calendar = () => {
  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin]}
        locales={allLocales}
        locale="ja"
      />
    </div>
  );
};

export default Calendar;
