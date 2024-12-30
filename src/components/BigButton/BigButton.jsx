import css from "./BigButton.module.css";

export default function BigButton({ title, width = 166, height = 48, background }) {
  return (
    <button
    className={css.bigButton}
    style={{ width, height, background }}
  >
      {title}
    </button>
  );
}
