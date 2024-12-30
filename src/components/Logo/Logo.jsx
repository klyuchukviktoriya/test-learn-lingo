import css from "./Logo.module.css";
// import sprite from "../../assets/sprite.svg"

export default function Logo() {
  return (
    <div  className={css.logo}>
      <svg width="28" height="28" className={css.logoIcon}>
        <use href="public/sprite.svg#logo" />
      </svg>
      <h1 className={css.logoTitle}>LearnLingo</h1>
    </div>
  );
}
