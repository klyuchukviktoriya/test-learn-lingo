import css from "./pages.module.css";
import MainScreen from "../components/MainScreen/MainScreen.jsx";
export default function HomePage() {
  return (
    <div className={css.homePage}>
      <MainScreen />
    </div>
  );
}
