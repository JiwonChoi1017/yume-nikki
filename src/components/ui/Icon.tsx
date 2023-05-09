import { FaPlus } from "react-icons/fa";

/**
 * 追加アイコン.
 *
 * @param {function} onClickHandler - クリックイベントハンドラ
 * @returns {JSX.Element} 追加アイコン.
 */
export const AddIcon: React.FC<{ onClickHandler: () => void }> = ({
  onClickHandler,
}) => {
  return <FaPlus onClick={onClickHandler} />;
};
