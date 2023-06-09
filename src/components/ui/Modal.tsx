import classes from "@/styles/Modal.module.css";

/** Props. */
interface Props {
  /** 子要素. */
  children: React.ReactNode;
}

/**
 * モーダル.
 *
 * @param {Props} props
 * @returns {JSX.Element} モーダル.
 */
const Modal = ({ children }: Props) => {
  return (
    <div className={classes.modal}>
      <div>{children}</div>
    </div>
  );
};

export default Modal;
