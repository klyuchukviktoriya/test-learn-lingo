import css from "./BigButton.module.css";

export default function BigButton({
  title,
  width = 166,
  height = 48,
  background = "#e0a39a",
  onClick,
  type,
  margin,
}) {
  return (
    <button
      className={css.bigButton}
      style={{ width, height, background, margin }}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
}
