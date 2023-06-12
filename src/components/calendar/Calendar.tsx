import { useEffect, useRef } from "react";

import { Diary } from "@/types/Diary";
import { EventClickArg } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react";
import { YearMonth } from "@/types/Common";
import allLocales from "@fullcalendar/core/locales-all";
import classes from "@/styles/Calendar.module.css";
import dayGridPlugin from "@fullcalendar/daygrid";
import styled from "@emotion/styled";

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

/** カレンダーのスタイルラッパー(css上書き用). */
export const CalendarStyleWrapper = styled.div`
  .fc .fc-toolbar-title {
    color: rgb(38, 59, 60);
    font-size: 20px;
  }
  .fc .fc-toolbar.fc-header-toolbar {
    margin-bottom: 2rem;
  }
  .fc .fc-view-harness {
    height: 420px !important;
  }
  .fc .fc-button-primary {
    background-color: transparent;
    border: 0.5px solid rgb(38, 59, 60);
    color: rgb(38, 59, 60);
    font-size: 14px;
  }
  .fc .fc-col-header-cell-cushion {
    color: rgb(38, 59, 60);
  }
  .fc .fc-daygrid-day-number {
    color: rgb(38, 59, 60);
  }
  .fc .fc-daygrid-event-harness {
    display: flex;
    align-items: center;
  }
  .fc-daygrid-event-dot {
    border: calc(var(--fc-daygrid-event-dot-width) / 2) solid #6faab0;
  }
  .fc-daygrid-dot-event .fc-event-title {
    color: rgb(38, 59, 60);
    font-size: 13px;
  }
`;

/**
 * カレンダー.
 *
 * @param {Props} props
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
      <CalendarStyleWrapper>
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
          eventClick={(arg: EventClickArg) => {
            arg.jsEvent.preventDefault();
            onClickDateHandler(arg);
          }}
        />
      </CalendarStyleWrapper>
    </div>
  );
};

export default Calendar;
