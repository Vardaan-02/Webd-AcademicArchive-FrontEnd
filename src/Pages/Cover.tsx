import { HomeAnimation2 } from "@/components/component/home-animation-2";
import { NavBar } from "@/components/component/nav-bar";

const Cover: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="h-16 w-screen"></div>

      <div className="flex justify-center items-center translate-y-[50%]">
        <HomeAnimation2 />
      </div>
    </>
  );
};

export default Cover;
