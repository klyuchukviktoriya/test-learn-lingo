import Spline from "@splinetool/react-spline";
import css from "./MainScreen.module.css";
import BigButton from "../BigButton/BigButton.jsx";
import { NavLink } from "react-router-dom";
export default function MainScreen() {
  return (
    <div className={css.main}>
      <Spline
        className={css.spline}
        style={{ width: "1240px", height: "790px" }}
        scene="/models/room_relaxing_copy_copy.spline"
      />
      <div className={css.mainBlock}>
        <h2>
          Unlock your potential with the best <span>language</span> tutors
        </h2>
        <p>
          Embark on an Exciting Language Journey with Expert Language Tutors:
          Elevate your language proficiency to new heights by connecting with
          highly qualified and experienced tutors.
        </p>
        <NavLink to="/teachers">
          <BigButton width="267px" height="60px" title="Get started" />
        </NavLink>
      </div>
      <ul className={css.underBlock}>
        <li>
          <p className={css.num}>32,000 +</p>
          <p className={css.text}>Experienced tutors</p>
        </li>
        <li>
          <p className={css.num}>300,000 +</p>
          <p className={css.text}>5-star tutor reviews</p>
        </li>
        <li>
          <p className={css.num}>120 +</p>
          <p className={css.text}>Subjects taught</p>
        </li>
        <li>
          <p className={css.num}>200 +</p>
          <p className={css.text}>Tutor nationalities</p>
        </li>
      </ul>
    </div>
  );
}
