import classes from "@/styles/NotSupportSpError.module.css";

/** Props. */
interface Props {
  /** タイトル. */
  title: string;
  /** 詳細. */
  detail: string;
}

/**
 * SPサポート対象外エラー.
 *
 * @param {Props} props
 * @returns {JSX.Element} SPサポート対象外エラー.
 */
const NotSupportSpError = ({ title, detail }: Props) => {
  return (
    <div className={classes.modal}>
      <div>
        <span
          className={classes.title}
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className={classes.detail}>{detail}</p>
      </div>
    </div>
  );
};

export default NotSupportSpError;
