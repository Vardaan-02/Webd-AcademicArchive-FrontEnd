import { IoReorderThreeOutline } from "react-icons/io5";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setTab } from "@/redux/slices/tab";
import toast, { Toaster } from "react-hot-toast";
import { useAppSelector } from "@/redux/hooks";
import { LoginPopUp } from "../myComponents/LoginPopUp";

//This is for mobile design
export function DropDownNavBar() {
  const userDetails = useAppSelector((state) => state.loginDetails);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="md:hidden">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="h-full w-12 flex justify-center items-center">
            <IoReorderThreeOutline className="h-12 w-8" />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <a
                onClick={() => {
                  //Handling change tab , Basically a state in maintained in redux called Tab and here using setTab that state is changed

                  navigate("/");
                  dispatch(setTab("/"));
                }}
              >
                Home
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                onClick={() => {
                  //Checking if we have a user or not , This could be way better but due to lack of good backend i have done it like this
                  if (userDetails.first_name.length > 0) {
                    navigate("/dashboard");
                    dispatch(setTab("/dashboard"));
                  } else toast.error("Login Required");
                }}
              >
                Resource
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <a
                onClick={() => {
                  if (userDetails.first_name.length > 0) {
                    navigate("/resources");
                    dispatch(setTab("/resources"));
                  } else toast.error("Login Required");
                }}
              >
                Resource
              </a>
            </DropdownMenuItem>
            {
              //Checking for If the user is admin or not
              userDetails.admin && (
                <DropdownMenuItem>
                  <a
                    onClick={() => {
                      if (userDetails.admin) {
                        navigate("/admin");
                        dispatch(setTab("/admin"));
                      } else toast.error("Not a Admin");
                    }}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    Admin
                  </a>
                </DropdownMenuItem>
              )
            }
            <DropdownMenuItem>
              <a
                onClick={() => {
                  navigate("/about");
                  dispatch(setTab("/about"));
                }}
              >
                About
              </a>
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuItem>
            <LoginPopUp />
          </DropdownMenuItem>
          <DropdownMenuItem>
            <a
              onClick={() => {
                navigate("/signUp");
              }}
            >
              Sign In
            </a>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Toaster />
    </div>
  );
}
