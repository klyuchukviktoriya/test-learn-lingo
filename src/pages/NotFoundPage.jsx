import { Link } from "react-router-dom";
import css from "./pages.module.css";
import Spline from "@splinetool/react-spline";

export default function NotFoundPage() {
  return (
    <div className={css.notFound}>
      <Spline
        className={css.splineTeachers}
        style={{ width: "1740px", height: "1000px" }}
        scene="/models/drag_and_drop_book_pencil_school_copy_copy.spline"
      />
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className={css.homeLink}>
        Go back to Home
      </Link>
      <svg width="100" height="100">
        <use href="public/sprite.svg#click" />
      </svg>
    </div>
  );
}
