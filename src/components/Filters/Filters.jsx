import { useDispatch, useSelector } from "react-redux";
import css from "./Filters.module.css";
import { selectTeachers } from "../../redux/teachers/selectors";
import { setFilter, resetFilters } from "../../redux/teachers/slice";

export default function Filters() {
  const dispatch = useDispatch();
  const filters = useSelector(state => state.teachers.filters);
  const teachers = useSelector(selectTeachers);

  const handleFilterChange = e => {
    const { name, value } = e.target;
    dispatch(setFilter({ name, value }));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  const uniqueLanguages = [
    ...new Set(teachers.flatMap(teacher => teacher.languages)),
  ];
  const uniqueLevels = [
    ...new Set(teachers.flatMap(teacher => teacher.levels)),
  ];

  const areFiltersApplied = Object.values(filters).some(value => value !== "");

  console.log("Filters:", filters);
  console.log("Are filters applied:", areFiltersApplied);

  return (
    <div className={css.filters}>
      <ul className={css.filtersUl}>
        <li>
          <label htmlFor="language">Languages</label>
          <select id="language" name="language" onChange={handleFilterChange}>
            <option value="">All Languages</option>
            {uniqueLanguages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label htmlFor="level">Level of knowledge</label>
          <select id="level" name="level" onChange={handleFilterChange}>
            <option value="">All Levels</option>
            {uniqueLevels.map((level, index) => (
              <option key={index} value={level}>
                {level}
              </option>
            ))}
          </select>
        </li>

        <li>
          <label htmlFor="price">Price</label>
          <select id="price" name="price" onChange={handleFilterChange}>
            <option value="">All Prices</option>
            <option value="0-10">up to 10$</option>
            <option value="10-20">10$ - 20$</option>
            <option value="20-30">20$ - 30$</option>
            <option value="30-40">30$ - 40$</option>
            <option value="40+">40$ and above</option>
          </select>
        </li>
      </ul>

      <button
        className={`${css.reset} ${areFiltersApplied ? "" : css.hidden}`}
        type="button"
        title="Reset filters"
        onClick={handleResetFilters}
      >
        Reset
      </button>
    </div>
  );
}
