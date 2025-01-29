import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import AdminPanel from "../AdminPannelPages/AdminPannel";
import EditPost from "../AdminPannelPages/EditPost";
import PostForm from "../AdminPannelPages/PostForm";


export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration /> {/* Add this inside your layout component */}
        <Main />
      </>
    ), // Main layout
    children: [
      {
        path: "/",
        element: <Home />, // Home Page
      },
      {
        path: "/blog",
        element: <Blog />, // Home Page
      },
      {
        path: "/contact",
        element: <Contact />, // Home Page
      },
      {
        path: "/post",
        element: <PostForm />, // Home Page
      },
      {
        path: "/adminpannel",
        element: <AdminPanel />, // Home Page
      },
      {
        path: "/edit-post/:postId",
        element: <EditPost />, // Home Page
      },

      // /
      
    ],
  },
]);