import css from "./TeacherCard.module.css";
export default function TeacherCard({ teacher }) {
  return (
    <div className={css.card}>
      <div className={css.cardImg}>
        <img
          src={teacher.avatar_url}
          alt={`${teacher.name} ${teacher.surname}`}
        />
        <svg width="12" height="12" className={css.online}>
          <use href="public/sprite.svg#online" />
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

              <div></div>
              <p>Lessons done: {teacher.lessons_done}</p>
              <div></div>
              <p>
                <svg width="16" height="16">
                  <use href="public/sprite.svg#star" />
                </svg>
                Rating: {teacher.rating}
              </p>
              <div></div>
              <p>
                Price / 1 hour: <span className={css.price}>&nbsp;{teacher.price_per_hour}$</span>
              </p>
            </div>

            <svg width="26" height="26" stroke="#e2e2e2" fill="none">
              <use href="public/sprite.svg#heart" />
            </svg>
            {/* <svg width="26" height="26" stroke="none" fill="#F4C550">
                <use href="public/sprite.svg#heart" />
              </svg> */}
          </div>
        </div>
        <div className={css.cardDescription}>
        <ul><li className={css.cardDescriptionText}>
            <span>Speaks: </span>
            {teacher.languages.join(", ")}
          </li>
          <li className={css.cardDescriptionText}>
            <span>Lesson Info: </span>
            {teacher.lesson_info}
          </li>
          <li className={css.cardDescriptionText}>
            <span>Conditions: </span>
            {teacher.conditions.join(" ")}
          </li></ul>
          
          <button>Read more</button>
          <p>{teacher.experience}</p>
        </div>

        <div className={css.rewies}>
<div><img width="44" height="44"
          src="/public/face.jpg"
          alt={`${teacher.name} ${teacher.surname}`}
        />
        <svg width="16" height="16">
                  <use href="public/sprite.svg#star" />
                </svg></div>
<p></p>
        </div>

        {/* <p>Languages: {teacher.languages.join(", ")}</p>
        <p>Levels: {teacher.levels.join(", ")}</p>

        <p>Price per hour: </p>

        <p>{teacher.lesson_info}</p> */}
      </div>
    </div>
  );
}
