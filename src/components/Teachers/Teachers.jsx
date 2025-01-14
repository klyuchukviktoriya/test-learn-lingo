import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTeachers } from "../../redux/teachers/operations.js";
import { selectFilteredTeachers } from "../../redux/teachers/selectors.js";
import TeacherCard from "../TeacherCard/TeacherCard.jsx";
import BigButton from "../BigButton/BigButton.jsx";
import css from "./Teachers.module.css";

export default function Teachers() {
  const dispatch = useDispatch();
  const teachers = useSelector(selectFilteredTeachers);
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchTeachers());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <>
      <div className={css.teachersList}>
        {teachers.slice(0, visibleCount).map((teacher, index) => (
          <TeacherCard key={index} teacher={teacher} />
        ))}
      </div>

      {visibleCount < teachers.length && (
        <BigButton
          title="Load more"
          width="183px"
          height="60px"
          type="button"
          margin="0 auto"
          onClick={handleLoadMore}
        />
      )}
    </>
  );
}
