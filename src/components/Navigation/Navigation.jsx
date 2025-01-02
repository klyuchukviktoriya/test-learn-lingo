import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
export default function Navigation() {
  const classLink = ({ isActive }) => clsx(css.link, isActive && css.active);
  return (
    <>
      <nav className={css.linkwrapper}>
        <NavLink className={classLink} to="/">
          Home
        </NavLink>
        <NavLink className={classLink} to="/teachers">
          Teachers
        </NavLink>
        <NavLink className={classLink} to="/favorites">
          Favorites
        </NavLink>
      </nav>
    </>
  );
}
