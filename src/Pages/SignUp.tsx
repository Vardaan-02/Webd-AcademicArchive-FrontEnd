import Background from "@/canvas/auth/Background";
import { SignUpForm } from "@/components/custom/SignUpForm";

const SignUp: React.FC = () => {
  return (
    <>
      <Background />
      <div className="w-screen h-screen flex justify-center items-center">
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUp;
