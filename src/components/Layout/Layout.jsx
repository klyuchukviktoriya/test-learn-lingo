import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import Navigation from "../Navigation/Navigation.jsx";
import Logo from "../Logo/Logo.jsx";
import css from "./Layout.module.css";
import AuthNav from "../AuthNav/AuthNav.jsx";

export default function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${css.header} ${
          isScrolled ? css.scrolled : css.transparent
        }`}
      >
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
