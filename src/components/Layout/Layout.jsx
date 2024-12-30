import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../Logo/Logo.jsx";
import css from "./Layout.module.css";
import AuthNav from "../AuthNav/AuthNav.jsx";

export default function Layout() {
  return (
    <>
      <div className={css.header}>
        <Logo />
        <Navigation />
        <AuthNav />
      </div>

      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
}
