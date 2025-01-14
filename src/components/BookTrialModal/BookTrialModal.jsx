import { yupResolver } from "@hookform/resolvers/yup";
import { bookingValidationSchema } from "../../constants/bookingValidationSchema";
import InputField from "../InputField/InputField";
import Modal from "../Modal/Modal";
import { useForm } from "react-hook-form";
import BigButton from "../BigButton/BigButton";
import css from "./BookTrialModal.module.css";

export default function BookTrialModal({ isOpen, onClose, teacher }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookingValidationSchema),
  });

  const handleBookTrialClick = async ()=> {
    try {
      onClose();
    } catch (err) {
      console.error("Error during booking:", err);
    }
  };

  return (
    <Modal
      width="600px"
      isOpen={isOpen}
      onClose={onClose}
      title="Book trial lesson"
      description="Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
    >
      <div className={css.teacherInfo}>
        <img
          width="44"
          height="44"
          className={css.teacherAvatar}
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
        />
        <div>
          <p className={css.teacherLabel}>Your teacher</p>
          <p className={css.teacherName}>
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(handleBookTrialClick)} className={css.form}>
        <div className={css.reasonSection}>
          <p className={css.reasonTitle}>
            What is your main reason for learning English?
          </p>
          <div className={css.radioGroup}>
            <label>
              <input
                type="radio"
                value="Career and business"
                {...register("reason")}
              />
              Career and business
            </label>
            <label>
              <input
                type="radio"
                value="Lesson for kids"
                {...register("reason")}
              />
              Lesson for kids
            </label>
            <label>
              <input
                type="radio"
                value="Living abroad"
                {...register("reason")}
              />
              Living abroad
            </label>
            <label>
              <input
                type="radio"
                value="Exams and coursework"
                {...register("reason")}
              />
              Exams and coursework
            </label>
            <label>
              <input
                type="radio"
                value="Culture, travel or hobby"
                {...register("reason")}
              />
              Culture, travel or hobby
            </label>
          </div>
          {errors.reason && (
            <p className={css.error}>{errors.reason.message}</p>
          )}
        </div>

        <div className={css.formInputs}>
          <InputField
            type="text"
            placeholder="Full Name"
            register={register("name")}
            error={errors.name?.message}
          />
          <InputField
            type="email"
            placeholder="Email"
            register={register("email")}
            error={errors.email?.message}
          />
          <InputField
            type="tel"
            placeholder="Phone number"
            register={register("phone")}
            error={errors.phone?.message}
          />
        </div>

        <BigButton
          title="Book"
          type="submit"
          background="#E0A39A"
          width="472px"
          height="60px"
          style={{ margin: "0 auto" }}
        />
      </form>
    </Modal>
  );
}
