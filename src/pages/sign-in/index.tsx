import Book from "@/components/layout/Book";
import SignInForm from "@/components/sign-in/SignInForm";

/**
 * ログイン画面.
 *
 * @returns {JSX.Element} ログイン画面.
 */
const SignInPage = () => {
  return (
    <Book leftPage={<></>} rightPage={<SignInForm />} currentPage="signIn" />
  );
};

export default SignInPage;
