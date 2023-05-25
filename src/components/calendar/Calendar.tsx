import { useEffect, useRef } from "react";

import { Diary } from "@/types/Diary";
import { EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import { YearMonth } from "@/types/Common";
import allLocales from "@fullcalendar/core/locales-all";
import classes from "@/styles/Calendar.module.css";
import dayGridPlugin from "@fullcalendar/daygrid";

/** Props. */
interface Props {
  /** 年月. */
  yearMonth: YearMonth;
  /** 日記リスト. */
  diaryList: Diary[];
  /** 「今日」クリックイベントハンドラ. */
  clickTodayHandler: () => void;
  /** 「前へ」クリックイベントハンドラ. */
  clickPrevHandler: () => void;
  /** 「次へ」クリックイベントハンドラ. */
  clickNextHandler: () => void;
  /** 日付クリックイベントハンドラ. */
  onClickDateHandler: (arg: EventClickArg) => void;
}

/**
 * カレンダー.
 *
 * @param {Props} Props
 * @returns {JSX.Element} カレンダー.
 */
const Calendar = ({
  yearMonth,
  diaryList,
  clickTodayHandler,
  clickPrevHandler,
  clickNextHandler,
  onClickDateHandler,
}: Props) => {
  // カレンダーのref
  const calendarRef = useRef<FullCalendar | null>(null);

  useEffect(() => {
    const api = calendarRef.current?.getApi();
    const { year, month } = yearMonth;
    api?.gotoDate(Date.parse(`${year}-${month}-01`));
  }, [yearMonth]);

  // 「今日」クリックイベントハンドラ
  const onClickTodayHandler = () => {
    const api = calendarRef.current?.getApi();
    api?.today();
    clickTodayHandler();
  };
  // 「前へ」クリックイベントハンドラ
  const onClickPrevHandler = () => {
    const api = calendarRef.current?.getApi();
    api?.prev();
    clickPrevHandler();
  };
  // 「次へ」クリックイベントハンドラ
  const onClickNextHandler = () => {
    const api = calendarRef.current?.getApi();
    api?.next();
    clickNextHandler();
  };

  return (
    <div className={classes.calendarWrap}>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin]}
        locales={allLocales}
        locale="ja"
        displayEventTime={false}
        headerToolbar={{
          left: "title",
          center: "",
          right: "customToday customPrev customNext",
        }}
        customButtons={{
          customToday: {
            text: "今日",
            click: onClickTodayHandler,
          },
          customPrev: {
            icon: "chevron-left",
            click: onClickPrevHandler,
          },
          customNext: {
            icon: "chevron-right",
            click: onClickNextHandler,
          },
        }}
        events={{
          events: diaryList,
        }}
        eventClick={onClickDateHandler}
      />
    </div>
  );
};

export default Calendar;
