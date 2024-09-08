import { NavBar } from "@/components/component/nav-bar";
import SideBar from "@/components/custom/SideBar";
import { FaBookDead } from "react-icons/fa";

const Admin: React.FC = () => {

  const subjects = [
    {
      label: "DSA",
      icon: (<FaBookDead className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    {
      label: "LAL",
      icon: (<FaBookDead className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    {
      label: "EPq",
      icon: (<FaBookDead className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
  ];

  return (
    <>
      <NavBar />
      <SideBar subjects={subjects}/>
    </>
  );
};

export default Admin;