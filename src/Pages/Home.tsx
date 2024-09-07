import DarkModeButton from "@/components/myComponents/DarkModeButton";
import { useAppSelector } from "@/redux/hooks";

const Home: React.FC = () => {
  const theme = useAppSelector((state) => state.theme);
  console.log(theme);

  return (
    <>
      <DarkModeButton />
      <h1>theme is {theme}</h1>
    </>
  );
};

export default Home;
