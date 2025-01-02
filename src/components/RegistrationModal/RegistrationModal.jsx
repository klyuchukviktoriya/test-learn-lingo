import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Modal from "../Modal/Modal.jsx";
import BigButton from "../BigButton/BigButton.jsx";
import InputField from "../InputField/InputField.jsx";
import css from "./RegistrationModal.module.css";
import { validationSchema } from "../../constants/ValidationSchema.jsx";

export default function RegistrationModal({ isOpen, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const handleSignUp = data => {
    console.log("Sign Up Data:", data);
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
            autoComplete="name"
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
        />
      </form>
    </Modal>
  );
}
