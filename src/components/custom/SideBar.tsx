"use client";
import { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import DashBoardInSideBar from "../myComponents/DashBoardInSideBar";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import AdminPortalInSideBar from "../myComponents/AdminPortalInSideBar";
import { setSubject } from "@/redux/slices/subject";

interface props {
  subjects:any,
}


// Side bar imported form aceternity but changed to meet requirements
const SideBar: React.FC<props> = ({ subjects }) => {

  const currentTab = useAppSelector(state => state.tab);
  const currentSubject = useAppSelector(state => state.subject);
  const dispatch = useAppDispatch();


  // Handling tab change on Side-Bar , a redux state is created for the same , normal state could have been used.
  const handleClick = (link: any) => { 
    dispatch(setSubject(link.label));
  };

  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row flex-1 mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <div className="mt-8 flex flex-col gap-2">
              {subjects.map((link:any, idx:number) => (
                <div
                  key={idx}
                  onClick={() => {
                    handleClick(link);
                  }}
                  className={`px-4 py-2 rounded ${
                    link.label === currentSubject && "bg-zinc-300 dark:bg-zinc-800"
                  }`}
                >
                  <SidebarLink link={link} />
                </div>
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      {currentTab.value==="/dashboard" && <DashBoardInSideBar />}
      {currentTab.value==="/admin" && <AdminPortalInSideBar />}
    </div>
  );
};

export default SideBar;