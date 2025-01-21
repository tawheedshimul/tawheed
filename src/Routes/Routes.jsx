import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import BlogPost from "../Pages/Blog/BlogPost";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    children: [
      {
        path: "/",
        element: <Home />, // Home Page
      },
      {
        path: "/blog",
        element: <BlogPost />, // Home Page
      },
      
    ],
  },
]);