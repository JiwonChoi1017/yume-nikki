import "react-datepicker/dist/react-datepicker.css";

import { AddIcon, DeleteIcon } from "../ui/Icon";
import DatePicker, { registerLocale } from "react-datepicker";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "../ui/Button";
import { Diary } from "@/types/Diary";
import ja from "date-fns/locale/ja";

/** Props. */
interface Props {
  /** 修正フォームか. */
  isModifyForm: boolean;
  /** 日記情報. */
  diaryInfo: Diary;
  /** 日記追加イベントハンドラ. */
  addDiaryHandler: (diary: Omit<Diary, "id" | "modifiedAt">) => void;
  /** キャンセルボタンの表示状態. */
  showCancelButton: boolean;
}

// カレンダーを日本語化するための変数を定義
registerLocale("ja", ja);

/**
 * 日記フォーム.
 *
 * @param {Props} Props
 * @returns {JSX.Element} 日記フォーム.
 */
const DiaryForm = ({
  isModifyForm,
  diaryInfo,
  addDiaryHandler,
  showCancelButton,
}: Props) => {
  // 選択された日付
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  // タイトル
  const [title, setTitle] = useState<string>("");
  // 内容
  const [content, setContent] = useState<string>("");
  // タグリスト
  const [tagList, setTagList] = useState<string[]>([]);
  // 活性/非活性状態
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  // 各入力項目のref
  const titleRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const tagRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    const { date, title, content, tagList } = diaryInfo;

    // 各状態を更新
    setSelectedDate(date);
    setTitle(title);
    setContent(content);
    tagRef.current = tagRef.current.slice(0, tagList.length);
    setTagList(tagList.length ? tagList : []);

    setIsDisabled(!date || !title || !content);
  }, [diaryInfo, tagList.length]);

  // 送信イベントハンドラ
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();

    if (!titleRef.current || !contentRef.current || !tagRef.current) {
      return;
    }

    const year = selectedDate.getFullYear();
    const month = selectedDate.getMonth() + 1;
    // 空文字を除外した新しいタグの配列を生成
    const filteredTagList = tagRef.current.reduce((acc: string[], tag) => {
      if (!tag.value) {
        return acc;
      }
      return [...acc, tag.value];
    }, []);

    if (isModifyForm) {
      console.log(
        selectedDate,
        titleRef.current.value,
        contentRef.current.value,
        filteredTagList
      );
      return;
    }

    addDiaryHandler({
      date: selectedDate,
      year: year.toString(),
      month: month.toString(),
      title: titleRef.current.value,
      content: contentRef.current.value,
      tagList: filteredTagList,
      createdAt: new Date(),
    });
  };
  // 日付変更イベントハンドラ
  const onChangeDateHandler = (date: Date) => {
    setSelectedDate(date);
  };
  // 入力変更イベントハンドラ
  const onChangeInputHandler = () => {
    if (!titleRef.current || !contentRef.current) {
      return;
    }

    const title = titleRef.current.value;
    const content = contentRef.current.value;

    setIsDisabled(!title || !content);
  };
  // タグ変更イベントハンドラ
  const onChangeTagHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const filteredTagList = tagRef.current.reduce(
      (acc: string[], tag, tagIndex) => {
        if (tagIndex === index) {
          return [...acc, e.target.value];
        }
        return [...acc, tag.value];
      },
      []
    );
    setTagList(filteredTagList);
  };

  // タグ追加アイコンのクリックイベントハンドラ
  const onClickAddTagIconHandler = () => {
    setTagList((prevState) => {
      return [...prevState, ""];
    });
  };
  // タグ削除アイコンのクリックイベントハンドラ
  const onClickDeleteTagIconHandler = (index: number) => {
    const filteredTagList = tagRef.current.reduce(
      (acc: string[], tag, tagIndex) => {
        if (tagIndex === index) {
          return acc;
        }
        return [...acc, tag.value];
      },
      []
    );
    setTagList(filteredTagList);
  };
  // タグ入力要素
  const tagInputElement = tagList.map((tag, index) => {
    return (
      <div key={index}>
        <input
          ref={(el) => {
            if (!el) {
              return;
            }
            tagRef.current[index] = el;
          }}
          type="text"
          maxLength={50}
          value={tag}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            onChangeTagHandler(e, index);
          }}
        />
        <DeleteIcon onClickHandler={() => onClickDeleteTagIconHandler(index)} />
      </div>
    );
  });

  return (
    <form onSubmit={onSubmitHandler}>
      <div>
        <label htmlFor="date">日付</label>
        <DatePicker
          dateFormat="yyyy/MM/dd"
          locale="ja"
          selected={selectedDate}
          onChange={onChangeDateHandler}
        />
      </div>
      <div>
        <label htmlFor="title">タイトル</label>
        <input
          ref={titleRef}
          type="text"
          id="title"
          name="title"
          maxLength={150}
          defaultValue={title}
          onChange={onChangeInputHandler}
        />
      </div>
      <div>
        <label htmlFor="content">内容</label>
        <textarea
          ref={contentRef}
          id="content"
          name="content"
          rows={20}
          maxLength={3000}
          defaultValue={content}
          onChange={onChangeInputHandler}
        />
      </div>
      <div>
        <label htmlFor="tag">タグ</label>
        {tagInputElement}
        <AddIcon onClickHandler={onClickAddTagIconHandler} />
      </div>
      <Button
        text={isModifyForm ? "修正" : "日記を追加"}
        isSubmit={true}
        isDisabled={isDisabled}
      />
    </form>
  );
};

export default DiaryForm;
