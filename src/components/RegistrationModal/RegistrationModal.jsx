import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../Modal/Modal.jsx";
import BigButton from "../BigButton/BigButton.jsx";
import css from "./RegistrationModal.module.css";
import { useState } from "react";
import InputField from "../InputField/InputField.jsx";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js";
import { registerValidationSchema } from "../../constants/registerValidationSchema.jsx";

export default function RegistrationModal({ isOpen, onClose }) {
  const {
    register: formRegister,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = async data => {
    try {
      setIsLoading(true);
      await dispatch(
        register({
          email: data.email,
          password: data.password,
          name: data.name,
        })
      ).unwrap();
      onClose();
    } catch (error) {
      if (error === "Firebase: Error (auth/email-already-in-use).") {
        setError("email", {
          type: "manual",
          message: "This email is already in use.",
        });
      } else {
        setError("email", {
          type: "manual",
          message: "Registration failed. Please try again.",
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Registration"
      description="Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
    >
      <form onSubmit={handleSubmit(handleSignUp)} className={css.form}>
        <div className={css.formInputs}>
          <InputField
            type="text"
            placeholder="Name"
            register={formRegister("name")}
            error={errors.name?.message}
            autoComplete="off"
          />
          <InputField
            type="email"
            placeholder="Email"
            register={formRegister("email")}
            error={errors.email?.message}
            autoComplete="email"
          />
          <InputField
            type="password"
            placeholder="Password"
            register={formRegister("password")}
            error={errors.password?.message}
            autoComplete="new-password"
          />
        </div>

        <BigButton
          title="Sign Up"
          type="submit"
          background="#E0A39A"
          width="438px"
          height="60px"
          disabled={isLoading}
        />
      </form>
    </Modal>
  );
}
