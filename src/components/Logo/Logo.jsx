import css from "./Logo.module.css";

export default function Logo() {
  return (
    <div className={css.logo}>
      <svg width="28" height="28">
        <use href="public/sprite.svg#logo" />
      </svg>
      <h1 className={css.logoTitle}>LearnLingo</h1>
    </div>
  );
}
