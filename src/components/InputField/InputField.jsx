import css from "./InputField.module.css";

export default function InputField({ type, placeholder, register, error }) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={css.input}
      />
      {error && <p className={css.error}>{error}</p>}
    </>
  );
}
