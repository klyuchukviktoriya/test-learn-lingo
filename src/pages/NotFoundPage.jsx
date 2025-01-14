import { Link } from "react-router-dom";
import css from "./pages.module.css";
import Spline from "@splinetool/react-spline";

export default function NotFoundPage() {
  return (
    <div className={css.notFound}>
      <Spline
        className={css.spline}
        style={{ width: "1440px", height: "790px" }}
        scene="/models/room_relaxing_copy_copy.spline"
      />
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className={css.homeLink}>
        Go back to Home
      </Link>
      <svg
        className={css.click} width="100" height="100">
        <use href="/sprite.svg#click" />
      </svg>
      <svg
        className={css.move} width="150" height="150">
        <use href="/sprite.svg#move" />
      </svg>
    </div>
  );
}
