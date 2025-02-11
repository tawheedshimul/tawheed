import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import AdminPanel from "../AdminPannelPages/AdminPannel";
import EditPost from "../AdminPannelPages/EditPost";
import PostForm from "../AdminPannelPages/PostForm";
import DynamicHead from "../utilities/DynamicHead";
import Product from "../Pages/Product/Product";
// Import the DynamicHead component

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
        element: (
          <>
            <DynamicHead title="Tawheed" faviconUrl="https://img.icons8.com/?size=80&id=OftIUKyv1EQY&format=png" />
            <Home />
          </>
        ), // Home Page
      },
      {
        path: "/blog",
        element: (
          <>
            <DynamicHead title="Blog Page" faviconUrl="https://cdn-icons-png.flaticon.com/128/4922/4922073.png" />
            <Blog />
          </>
        ), // Blog Page
      },
      {
        path: "/contact",
        element: (
          <>
            <DynamicHead title="Contact Page" faviconUrl="https://cdn-icons-png.flaticon.com/128/10439/10439779.png" />
            <Contact />
          </>
        ), // Contact Page
      },
      {
        path: "/product",
        element: (
          <>
            <DynamicHead title="Product Page" faviconUrl="https://cdn-icons-png.flaticon.com/128/18776/18776217.png" />
            <Product />
          </>
        ), // Contact Page
      },
      {
        path: "/post",
        element: (
          <>
            <DynamicHead title="Post Form" faviconUrl="/post-favicon.ico" />
            <PostForm />
          </>
        ), // Post Form Page
      },
      {
        path: "/adminpannel",
        element: (
          <>
            <DynamicHead title="Admin Panel" faviconUrl="/admin-favicon.ico" />
            <AdminPanel />
          </>
        ), // Admin Panel Page
      },
      {
        path: "/edit-post/:postId",
        element: (
          <>
            <DynamicHead title="Edit Post" faviconUrl="/edit-favicon.ico" />
            <EditPost />
          </>
        ), // Edit Post Page
      },
    ],
  },
]);