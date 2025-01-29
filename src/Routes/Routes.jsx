import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import BlogPost from "../Pages/Blog/BlogPost";
import Contact from "../Pages/Contact/Contact";


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
        element: <BlogPost />, // Home Page
      },
      {
        path: "/contact",
        element: <Contact />, // Home Page
      },
      
    ],
  },
]);