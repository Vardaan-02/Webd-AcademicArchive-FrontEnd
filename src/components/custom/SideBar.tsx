"use client";
import { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "../ui/sidebar";
import { cn } from "@/lib/utils";
import DashBoardInSideBar from "../myComponents/DashBoardInSideBar";
import tab from "@/redux/slices/tab";
import { useAppSelector } from "@/redux/hooks";
import AdminPortalInSideBar from "../myComponents/AdminPortalInSideBar";

interface props {
  subjects:any,
}

const SideBar: React.FC<props> = ({ subjects }) => {
  const [subject, setSubject] = useState("DSA");

  const currentTab = useAppSelector(state => state.tab);

  const handleClick = (link: any) => {
    setSubject(link.label);
    console.log(subject);
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
                    link.label === subject && "bg-zinc-300"
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