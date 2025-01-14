import { useSelector } from "react-redux";
import css from "./pages.module.css";
import TeacherCard from "../components/TeacherCard/TeacherCard.jsx";
import { selectFavorites } from "../redux/favorites/slice.js";
import BigButton from "../components/BigButton/BigButton.jsx";
import { useState } from "react";
import Spline from "@splinetool/react-spline";

export default function FavoritesPage() {
  const favorites = useSelector(selectFavorites);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4);
  };

  return (
    <div className={css.teachers}>
     <Spline
        className={css.splineTeachers}
        style={{ width: "1740px", height: "1000px" }}
        scene="/models/drag_and_drop_book_pencil_school_copy_copy.spline"
      />
      {favorites.length > 0 ? (
        <>
          <div className={css.teachersList}>
            {favorites.slice(0, visibleCount).map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </div>
          {visibleCount < favorites.length && (
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
      ) : (
        <p className={css.noFavorites}>You have no favorites yet.</p>
      )}
    </div>
  );
}
