import { useAppSelector } from "@/redux/hooks";

const DashBoard: React.FC = () => {
  const theme = useAppSelector(state => state.theme);
  console.log(theme);

  return (
    <>
    
    </>
  );
};

export default DashBoard;
