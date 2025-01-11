import Spline from "@splinetool/react-spline"
import Filters from "../components/Filters/Filters.jsx"
import Teachers from "../components/Teachers/Teachers.jsx"
import css from "./pages.module.css"

export default function TeacherPage () {
return <div className={css.teachers}>
 <Spline
        className={css.splineTeachers}
        style={{ width: "1740px", height: "1000px" }}
        scene="/models/drag_and_drop_book_pencil_school_copy_copy.spline"
      />

    <Filters/>
    <Teachers/>
</div>
}