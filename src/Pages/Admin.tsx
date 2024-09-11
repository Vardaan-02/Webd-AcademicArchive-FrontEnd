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
      label: "EP",
      icon: (<FaBookDead className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    {
      label: "OS",
      icon: (<FaBookDead className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    {
      label: "CN",
      icon: (<FaBookDead className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    {
      label: "OOPS",
      icon: (<FaBookDead className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    {
      label: "PS",
      icon: (<FaBookDead className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />)
    },
    {
      label: "COA",
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