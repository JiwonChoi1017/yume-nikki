/** Props. */
interface Props {
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
 * @param {string} text - テキスト.
 * @param {boolean} isSubmit - (任意)送信ボタンか.
 * @param {boolean} isDisabled - (任意)非活性状態か.
 * @param {string} clickHandler - (任意)クリックイベントハンドラ.
 * @returns {JSX.Element} ボタン.
 */
export const Button = ({
  text,
  isSubmit = false,
  isDisabled = false,
  clickHandler,
}: Props) => {
  const button = isSubmit ? (
    <button type="submit" disabled={isDisabled}>
      {text}
    </button>
  ) : (
    <button
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
