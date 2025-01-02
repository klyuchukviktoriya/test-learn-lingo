import css from "./InputField.module.css";

export default function InputField({
  type = "text",
  placeholder,
  register,
  error,
  autoComplete,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        autoComplete={autoComplete}
        className={css.input}
      />
      {error && <p className={css.error}>{error}</p>}
    </>
  );
}
