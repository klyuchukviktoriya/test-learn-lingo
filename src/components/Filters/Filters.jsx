import css from  "./Filters.module.css"
export default function Filters() {
  return (
    <ul className={css.filters}>
      <li>
        <label htmlFor="language">Languages</label>
        <select id="language" name="language">
          <option value="French">French</option>
          <option value="English">English</option>
          <option value="German">German</option>
          <option value="Ukrainian">Ukrainian</option>
          <option value="Polish">Polish</option>
        </select>
      </li>
      <li>
        <label htmlFor="level">Level of knowledge</label>
        <select id="level" name="level">
          <option value="A1">A1 Beginner</option>
          <option value="A2">A2 Elementary</option>
          <option value="B1">B1 Intermediate</option>
          <option value="B2">B2 Upper-Intermediate</option>
          <option value="C1">C1 Advanced</option>
        </select>
      </li>
      <li>
        <label htmlFor="price">Price</label>
        <select id="price" name="price">
          <option value="10">10 $</option>
          <option value="20">20 $</option>
          <option value="30">30 $</option>
          <option value="40">40 $</option>
        </select>
      </li>
    </ul>
  );
}
