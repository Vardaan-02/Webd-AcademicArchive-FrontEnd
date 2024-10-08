"use client";
import { SparklesCore } from "../ui/sparkles";
import { HomeAnimation1 } from "./home-animation-1";
import { useAppSelector } from "@/redux/hooks";

export function HomeAnimation2() {
  const theme = useAppSelector((state) => state.theme);

  //Function to change color of particles
  function sparkleColor() {
    if (theme === "dark") return "#FFFFFF";
    else return "#000000";
  }

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
        <HomeAnimation1 />
      </h1>

      {/* To clear blue purple gradient  */}
      <div className="w-[40rem] h-40 relative">
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor={sparkleColor()} //actual call to function
        />

        {/* Creating a semi Circle at bottom  */}
        <div className="absolute inset-0 w-full h-full bg-white dark:bg-[#0d0d0d] [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
}
