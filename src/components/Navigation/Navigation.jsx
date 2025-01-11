import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
export default function Navigation() {
  const classLink = ({ isActive }) => clsx(css.link, isActive && css.active);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav className={css.linkwrapper}>
        <NavLink className={classLink} to="/">
          Home
        </NavLink>
        <NavLink className={classLink} to="/teachers">
          Teachers
        </NavLink>
        {isLoggedIn && (
          <NavLink className={classLink} to="/favorites">
            Favorites
          </NavLink>
        )}
      </nav>
    </>
  );
}
