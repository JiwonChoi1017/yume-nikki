import MainLayout from "@/components/layout/MainLayout";
import SignInForm from "@/components/sign-in/SignInForm";

/**
 * ログイン画面.
 *
 * @returns {JSX.Element} ログイン画面.
 */
const SignInPage = () => {
  return (
    <MainLayout>
      <SignInForm />
    </MainLayout>
  );
};

export default SignInPage;
