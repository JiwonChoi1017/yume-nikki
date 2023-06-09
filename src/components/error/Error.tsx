import Modal from "../ui/Modal";
import { ModalButton } from "../ui/Button";
import classes from "@/styles/Error.module.css";
import { useRouter } from "next/router";

/** Props. */
interface Props {
  /** タイトル. */
  title: string;
  /** サブタイトル. */
  subtitle: string;
  /** 詳細. */
  detail: string;
}

/**
 * エラー.
 *
 * @param {Props} props
 * @returns {JSX.Element} エラー.
 */
const Error = ({ title, subtitle, detail }: Props) => {
  // ルーター
  const router = useRouter();

  // トップへ戻るイベントハンドラ
  const moveToTopPage = () => {
    router.push("/");
  };

  return (
    <Modal>
      <span className={classes.title}>{title}</span>
      <span className={classes.subtitle}>{subtitle}</span>
      <p className={classes.detail}>{detail}</p>
      <ModalButton text="トップへ戻る" clickHandler={moveToTopPage} />
    </Modal>
  );
};

export default Error;
