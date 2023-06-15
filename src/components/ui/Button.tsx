import classes from "@/styles/Button.module.css";

/** Props. */
interface Props {
  /** class名. */
  className?: string;
  /** テキスト. */
  text: string;
  /** (任意)送信ボタンか. */
  isSubmit?: boolean;
  /** (任意)非活性状態か. */
  isDisabled?: boolean;
  /** （任意）クリックイベントハンドラ. */
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * ボタン.
 *
 * @param {Props} props
 * @returns {JSX.Element} ボタン.
 */
export const Button = ({
  className,
  text,
  isSubmit = false,
  isDisabled = false,
  clickHandler,
}: Props) => {
  const button = isSubmit ? (
    <button
      className={`${classes.button} ${classes.submitButton}${
        className ? ` ${classes[className]}` : ""
      }`}
      type="submit"
      disabled={isDisabled}
    >
      {text}
    </button>
  ) : (
    <button
      className={classes.button}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
        if (!clickHandler) return;
        clickHandler(e);
      }}
    >
      {text}
    </button>
  );

  return button;
};

/**
 * ダブルボタン.
 *
 * @param {Props} first - 1つ目.
 * @param {Props} second - 2つ目.
 * @returns {JSX.Element} ダブルボタン.
 */
export const DoubleButton: React.FC<{
  button: {
    first: Props;
    second: Props;
  };
}> = ({ button }) => {
  const { first, second } = button;

  return (
    <div className={classes.button__wrap}>
      <Button
        text={first.text}
        isSubmit={first.isSubmit}
        isDisabled={first.isDisabled}
        clickHandler={first.clickHandler}
      />
      <Button
        text={second.text}
        isSubmit={second.isSubmit}
        isDisabled={second.isDisabled}
        clickHandler={second.clickHandler}
      />
    </div>
  );
};

/**
 * 日記を開くボタン.
 *
 * @param {Props} props
 * @returns {JSX.Element} モーダル用ボタン.
 */
export const OpenDiaryButton = ({ text, clickHandler }: Props) => {
  return (
    <button className={classes.openDiaryButton} onClick={clickHandler}>
      {text}
    </button>
  );
};

/**
 * 日記追加ボタン.
 *
 * @param {Props} props
 * @returns {JSX.Element} 日記追加ボタン.
 */
export const AddDiaryButton = ({ text, clickHandler }: Props) => {
  return (
    <button className={classes.addDiaryButton} onClick={clickHandler}>
      {text}
    </button>
  );
};

/**
 * モーダル用ボタン.
 *
 * @param {Props} props
 * @returns {JSX.Element} モーダル用ボタン.
 */
export const ModalButton = ({ text, clickHandler }: Props) => {
  return (
    <button className={classes.modalButton} onClick={clickHandler}>
      {text}
    </button>
  );
};
