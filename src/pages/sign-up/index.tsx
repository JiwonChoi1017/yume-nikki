import MainLayout from "@/components/layout/MainLayout";
import SignUpForm from "@/components/sign-up/SignUpForm";

/**
 * ユーザ登録画面.
 *
 * @returns {JSX.Element} ユーザ登録画面.
 */
const SignUpPage = () => {
  return (
    <MainLayout>
      <SignUpForm />
    </MainLayout>
  );
};

export default SignUpPage;
