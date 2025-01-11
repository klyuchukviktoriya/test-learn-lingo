import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchTeachers } from "../../redux/teachers/operations.js";
import {
  selectError,
  selectIsLoading,
  selectTeachers,
} from "../../redux/teachers/selectors.js";
import TeacherCard from "../TeacherCard/TeacherCard.jsx";

export default function Teachers() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectTeachers);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {teachers.map((teacher, index) => (
        <TeacherCard key={index} teacher={teacher} />
      ))}
    </div>
  );
}
