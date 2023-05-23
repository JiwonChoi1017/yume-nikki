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
  /** 前へクリックイベントハンドラ. */
  clickPrevHandler: () => void;
  /** 次へクリックイベントハンドラ. */
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

  // 前へクリックイベントハンドラ
  const onClickPrevHandler = () => {
    const api = calendarRef.current?.getApi();
    api?.prev();
    clickPrevHandler();
  };
  // 次へクリックイベントハンドラ
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
        headerToolbar={{
          left: "customPrev",
          center: "title",
          right: "customNext",
        }}
        customButtons={{
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
