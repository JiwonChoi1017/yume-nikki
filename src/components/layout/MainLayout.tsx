import Header from "./Header";

/** Props. */
interface Props {
  /** (任意)子要素. */
  children?: React.ReactNode;
}

/**
 * メインレイアウト.
 *
 * @param {React.ReactNode} children - (任意)子要素.
 * @returns {JSX.Element} メインレイアウト.
 */
const MainLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>
        <div>{children}</div>
      </main>
    </div>
  );
};

export default MainLayout;
