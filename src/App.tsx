import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import DashBoard from "./Pages/DashBoard";
import { useEffect } from "react";
import { useAppSelector } from "./redux/hooks";
import Cover from "./Pages/Cover";
import Admin from "./Pages/Admin";
import Resources from "./Pages/Resources";
import About from "./Pages/About";


//Routing handled here because very less pages 
const router = createBrowserRouter([
  { path: "/", element: <Cover /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/dashboard", element: <DashBoard /> },
  { path: "/admin", element: <Admin /> },
  { path: "/resources", element: <Resources /> },
  { path: "/about", element: <About />}
]);

export default function App() {

  //Theme set up
  const theme = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [theme]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
