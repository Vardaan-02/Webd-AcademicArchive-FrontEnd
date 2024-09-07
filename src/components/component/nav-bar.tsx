import { Button } from "@/components/ui/button";
import DarkModeButton from "../myComponents/DarkModeButton";
import { LoginPopUp } from "../myComponents/LoginPopUp";
import { DropDownNavBar } from "../custom/DropDownNavBar";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logout } from "@/redux/slices/loginDetails";

export function NavBar() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const userDetails = useAppSelector((state) => state.loginDetails);

  console.log("heelo", userDetails);

  return (
    <header className="shadow-md w-screen">
      <div className="container flex h-16 items-center justify-between min-w-screen">
        <a href="#" className="flex items-center gap-2">
          <span className="text-lg font-semibold">GDSC</span>
        </a>
        <nav className="hidden space-x-6 md:flex">
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Resources
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Admin
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </a>
        </nav>
        <div className="flex gap-2 md:gap-8">
          <DarkModeButton />
          <div className="hidden md:block">
            {userDetails.first_name.length == 0 ? (
              <div className="flex items-center gap-2">
                <LoginPopUp/>
                <Button
                  className="px-4 py-2 text-sm font-medium bg-green-700 hover:bg-green-400 text-white"
                  onClick={() => {
                    navigate("/signUp");
                  }}
                >
                  Sign Up
                </Button>
              </div>
            ) : (
              <div className="flex justify-center items-center font-bold gap-4">
                <div className="flex flex-col justify-center">
                  <p>{userDetails.first_name}</p>
                  <p>{userDetails.last_name}</p>
                </div>
                <Button
                  className="px-4 py-2 text-sm font-medium bg-red-500 hover:bg-red-700"
                  onClick={() => {
                    dispatch(logout());
                    console.log(userDetails);
                  }}
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
          <DropDownNavBar />
        </div>
      </div>
    </header>
  );
}
