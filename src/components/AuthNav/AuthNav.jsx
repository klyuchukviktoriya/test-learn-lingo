import BigButton from "../BigButton/BigButton"
import css from "./AuthNav.module.css"


export default function AuthNav () {
    return <div className={css.auth} >
        <button className={css.log}>
              <svg width="20" height="20" className={css.logIcon}>
                    <use href="public/sprite.svg#login" />
                  </svg>
                  <span>Log in</span>
        </button>
        {/* <button >
              <svg width="20" height="20" className={css.log}>
                    <use href="public/sprite.svg#logout" />
                  </svg>
        </button> */}
        <BigButton title={`Registration`}/>
    </div>
}