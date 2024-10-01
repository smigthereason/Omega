import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App.tsx';
import './index.css';
import Login from './components/Login.tsx';
import SignupPage from './components/singup.tsx';
import Settings from "./components/Settings.tsx";
import Search from './components/Search.tsx';
import ChangePassword from './components/Settings/ChangePassword.tsx';
import User from './components/User.tsx';
import Cart from './components/Cart.tsx';
import SocialLinks from './components/Settings/SocialLinks.tsx';
// import Notifications from "./components/Settings/";
import Billing from "./components/Settings/Billing.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/settings",
    element: <Settings />
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/changePassword",
    element: <ChangePassword />
  },
  {
    path: "/socialLinks",
    element: <SocialLinks />
  },
  // {
  //   path: "/notifications",
  //   element: <Notifications />
  // },
  {
    path: "/billing",
    element: <Billing />
  },
  {
    path: "/user",
    element: <User username={''} email={''} avatarUrl={''} />
  },
  {
    path: "/cart",
    element: <Cart />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignupPage />
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
