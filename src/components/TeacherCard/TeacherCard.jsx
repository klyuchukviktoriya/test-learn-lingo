import BigButton from "../BigButton/BigButton.jsx";
import css from "./TeacherCard.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogInModal from "../LogInModal/LogInModal.jsx";
import BookTrialModal from "../BookTrialModal/BookTrialModal.jsx";
import { saveFavorites } from "../../redux/favorites/operations.js";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/favorites/slice.js";

export default function TeacherCard({ teacher }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const favorites = useSelector(state => state.favorites.items);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLogInModalOpen, setIsLogInModalOpen] = useState(false);
  const [isBookTrialModalOpen, setIsBookTrialModalOpen] = useState(false);

  const user = useSelector(state => state.auth.user);

  const isFavorite = favorites.some(
    fav => fav.name === teacher.name && fav.surname === teacher.surname
  );

  const toggleExpanded = () => {
    setIsExpanded(prevState => !prevState);
  };

  const handleFavoriteClick = () => {
    if (!isAuthenticated) {
      setIsLogInModalOpen(true);
      return;
    }

    if (isFavorite) {
      dispatch(removeFromFavorites(teacher));
      dispatch(
        saveFavorites(
          user.uid,
          favorites.filter(fav => fav !== teacher)
        )
      );
    } else {
      dispatch(addToFavorites(teacher));
      dispatch(saveFavorites(user.uid, [...favorites, teacher]));
    }
  };

  const handleBookTrialClick = () => {
    setIsBookTrialModalOpen(true);
  };

  return (
    <>
      <div className={css.card}>
        <div className={css.cardImg}>
          <img
            src={teacher.avatar_url}
            alt={`${teacher.name} ${teacher.surname}`}
          />
          <svg width="12" height="12" className={css.online}>
            <use href="/sprite.svg#online" />
          </svg>
        </div>

        <div className={css.cardContent}>
          <div className={css.cardMain}>
            <h2>
              <span>Hello, I am </span>
              <br />
              {teacher.name} {teacher.surname}
            </h2>
            <div className={css.cardMainRight}>
              <div className={css.cardMainRightInfo}>
                <p>
                  <svg width="16" height="16" stroke="yellow">
                    <use href="public/sprite.svg#book" />
                  </svg>{" "}
                  Lessons online
                </p>
                <p>Lessons done: {teacher.lessons_done}</p>
                <p>
                  <svg width="16" height="16">
                    <use href="public/sprite.svg#star" />
                  </svg>
                  Rating: {teacher.rating}
                </p>
                <p>
                  Price / 1 hour:{" "}
                  <span className={css.price}>
                    &nbsp;{teacher.price_per_hour}$
                  </span>
                </p>
              </div>
              <svg
                width="26"
                height="26"
                className={isFavorite ? css.favorite : css.notFavorite}
                onClick={handleFavoriteClick}
                stroke={isFavorite ? "#F4C550" : "#e2e2e2"}
                fill={isFavorite ? "#F4C550" : "none"}
              >
                <use href="public/sprite.svg#heart" />
              </svg>
            </div>
          </div>

          <div className={css.cardDescription}>
            <ul className={css.cardDescriptionText}>
              <li>
                <span>Speaks: </span>
                {teacher.languages.join(", ")}
              </li>
              <li>
                <span>Lesson Info: </span>
                {teacher.lesson_info}
              </li>
              <li>
                <span>Conditions: </span>
                {teacher.conditions.join(" ")}
              </li>
            </ul>

            {isExpanded && (
              <>
                <p>{teacher.experience}</p>
                <div className={css.rewies}>
                  {teacher.reviews.map((review, index) => (
                    <div key={index} className={css.rewiesBlock}>
                      <div>
                        <svg width="44" height="44">
                          <use href="public/sprite.svg#face" />
                        </svg>
                        <p>
                          {review.reviewer_name}
                          <br />
                          <svg
                            width="16px"
                            height="16px"
                            style={{ verticalAlign: "middle" }}
                          >
                            <use href="public/sprite.svg#star" />
                          </svg>{" "}
                          {review.reviewer_rating}
                        </p>
                      </div>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </div>
                <BigButton
                  width="232px"
                  height="60px"
                  type="button"
                  title="Book trial lesson"
                  onClick={handleBookTrialClick}
                />
              </>
            )}
          </div>

          <button className={css.showMore} onClick={toggleExpanded}>
            {isExpanded ? "Show Less" : "Read More"}
          </button>

          <ul className={css.levels}>
            {teacher.levels.map((level, index) => (
              <li key={index}>#{level}</li>
            ))}
          </ul>
        </div>
      </div>

      {isLogInModalOpen && (
        <LogInModal
          isOpen={isLogInModalOpen}
          onClose={() => setIsLogInModalOpen(false)}
        />
      )}

      {isBookTrialModalOpen && (
        <BookTrialModal
          isOpen={isBookTrialModalOpen}
          onClose={() => setIsBookTrialModalOpen(false)}
          teacher={teacher}
        />
      )}
    </>
  );
}
