import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../Modal/Modal.jsx";
import BigButton from "../BigButton/BigButton.jsx";
import css from "./RegistrationModal.module.css";
import { useState } from "react";
import InputField from "../InputField/InputField.jsx";
import { registerUser } from "../firebase/firebaseAuth.js";
import { registerValidationSchema } from "../../constants/registerValidationSchema";

export default function RegistrationModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidationSchema),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async data => {
    try {
      setIsLoading(true);
      await registerUser(data.email, data.password, data.name);
      alert("Registration successful!");
      onClose();
    } catch (error) {
      alert(`Error: ${error.message}`);
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
            register={register("name")}
            error={errors.name?.message}
            autoComplete="off"
          />
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
