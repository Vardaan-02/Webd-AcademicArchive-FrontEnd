import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import DashBoard from "./Pages/DashBoard";
import { useEffect } from "react";
import { useAppSelector } from "./redux/hooks";
import  Home  from "./Pages/Home";
import Cover from "./Pages/Cover";

const router = createBrowserRouter([
  { path: "/", element: <Cover /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/home", element: <DashBoard /> },
]);

export default function App() {
  const theme = useAppSelector((state) => state.theme);

  useEffect(() => {
    document.body.classList.toggle("dark");
  }, [theme]);

  return (
    <>
      <RouterProvider router={router} />
      {/* <Home /> */}
    </>
  );
}
