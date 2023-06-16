import classes from "@/styles/UserForm.module.css";

/** Props. */
interface Props {
  /** 子要素. */
  children: React.ReactNode;
  /** タイトル. */
  title: string;
  /** 送信イベントハンドラ. */
  onSubmitHandler: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

/**
 * ユーザーフォーム.
 *
 * @param {Props} props
 * @returns {JSX.Element} ユーザーフォーム.
 */
const UserForm = ({ children, title, onSubmitHandler }: Props) => {
  return (
    <div className={classes.userFormWrap}>
      <div>
        <span className={classes.index}>{title}</span>
      </div>
      <div className={classes.userForm}>
        <form onSubmit={onSubmitHandler}>{children}</form>
      </div>
    </div>
  );
};

export default UserForm;
