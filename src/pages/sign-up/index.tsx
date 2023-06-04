import Book from "@/components/layout/Book";
import SignUpForm from "@/components/sign-up/SignUpForm";

/**
 * ユーザ登録画面.
 *
 * @returns {JSX.Element} ユーザ登録画面.
 */
const SignUpPage = () => {
  return <Book leftPage={<></>} rightPage={<SignUpForm />} />;
};

export default SignUpPage;
