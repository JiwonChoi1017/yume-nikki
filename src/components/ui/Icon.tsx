import { FaPlus } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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

/**
 * 削除アイコン.
 *
 * @param {function} onClickHandler - クリックイベントハンドラ
 * @returns {JSX.Element} 削除アイコン.
 */
export const DeleteIcon: React.FC<{
  onClickHandler: () => void;
}> = ({ onClickHandler }) => {
  return <IoClose onClick={onClickHandler} />;
};
