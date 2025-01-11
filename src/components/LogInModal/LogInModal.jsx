import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../Modal/Modal.jsx";
import BigButton from "../BigButton/BigButton.jsx";
import css from "./LogInModal.module.css";
import InputField from "../InputField/InputField.jsx";
import { useDispatch } from "react-redux";
// import { logInUser } from "../firebase/firebaseAuth.js";
import { logInValidationSchema } from "../../constants/logInValidationSchema.jsx";
import { logIn } from "../../redux/auth/operations.js";

export default function LogInModal({ isOpen, onClose }) {
    const dispatch = useDispatch();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(logInValidationSchema),
    });
  
    const handleLogIn = async (data) => {
      try {
        await dispatch(logIn(data)); // Вызываем Redux-операцию логина
        // alert("Login successful!");
        onClose(); // Закрываем модалку
      } catch (error) {
        console.error("Log In Error:", error.message);
        alert(`Error: ${error.message}`);
      }
    };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Log In"
      description="Welcome back! Please enter your credentials to access your account and continue your search for a teacher."
    >
      <form onSubmit={handleSubmit(handleLogIn)} className={css.form}>
        <div className={css.formInputs}>
          <InputField
            type="email"
            placeholder="Email"
            register={register("email")}
            error={errors.email?.message}
            autoComplete="email"
          />

          <InputField
            type="password"
            placeholder="Password"
            register={register("password")}
            error={errors.password?.message}
            autoComplete="current-password"
          />
        </div>

        <BigButton
          title="Log In"
          type="submit"
          background="#E0A39A"
          width="438px"
          height="60px"
        />
      </form>
    </Modal>
  );
}
