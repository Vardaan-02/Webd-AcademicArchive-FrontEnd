import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion"
import { FiMoon, FiSun } from "react-icons/fi";
import {light,dark} from "../../redux/slices/theme/index"


//Dark Mode Button Made from stating to end without external help
const DarkModeButton: React.FC = () => {
  const theme = useAppSelector(state => state.theme);
  const dispatch = useAppDispatch();

  return (

    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10 ${
          theme === "light" ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          dispatch(light());
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10 ${
          theme === "dark" ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          dispatch(dark());
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          theme === "dark" ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
};

export default DarkModeButton;
