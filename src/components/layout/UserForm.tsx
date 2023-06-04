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
 * @param {Props} Props
 * @returns {JSX.Element} ユーザーフォーム.
 */
const UserForm = ({ children, title, onSubmitHandler }: Props) => {
  return (
    <div className={classes.userForm}>
      <form onSubmit={onSubmitHandler}>
        <h3>{title}</h3>
        {children}
      </form>
    </div>
  );
};

export default UserForm;
