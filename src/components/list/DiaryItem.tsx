import { Diary } from "@/types/Diary";
import Link from "next/link";

/** Props. */
interface Props {
  /** 日記. */
  diary: Diary;
}

/**
 * 日記.
 *
 * @param {Props} Props.
 * @returns {JSX.Element} 日記.
 */
const DiaryItem = ({ diary }: Props) => {
  const {
    id,
    date,
    year,
    month,
    title,
    content,
    tagList,
    createdAt,
    modifiedAt,
  } = diary;

  return (
    <Link href={`/detail/${year}/${month}/${id}`}>
      <li>
        <p>{title}</p>
        <p>{content}</p>
      </li>
    </Link>
  );
};

export default DiaryItem;
