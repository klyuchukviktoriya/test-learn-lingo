import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BigButton from "../BigButton/BigButton.jsx";
import css from "./AuthNav.module.css";
import LogInModal from "../LogInModal/LogInModal.jsx";
import RegistrationModal from "../RegistrationModal/RegistrationModal.jsx";
// import { logOutUser } from "../firebase/firebaseAuth.js";
// import { getAuth } from "firebase/auth";
import { logOut } from "../../redux/auth/operations.js";
import { selectIsLoggedIn, selectIsRefreshing, selectUser } from "../../redux/auth/selectors.js";

export default function AuthNav() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const user = useSelector(selectUser);
  
    const handleLogOut = async () => {
      dispatch(logOut());
    };
  
    const [isLogInOpen, setIsLogInOpen] = useState(false);
    const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
    const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <div className={css.auth}>
      {isLoggedIn ? (
        <>
          <button className={css.log} onClick={handleLogOut}>
            <svg width="20" height="20" className={css.logIcon}>
              <use href="public/sprite.svg#logout" />
            </svg>
            <span>Log out</span>
          </button>
          <p className={css.hello}>Hello, {user?.displayName || "User"}</p>
        </>
      ) : isRefreshing ? (
      <p>Loading...</p>
    ): (
        <>
          <button className={css.log} onClick={() => setIsLogInOpen(true)}>
            <svg width="20" height="20" className={css.logIcon}>
              <use href="public/sprite.svg#login" />
            </svg>
            <span>Log in</span>
          </button>
          <BigButton
            title="Registration"
            onClick={() => setIsRegistrationOpen(true)}
          />
        </>
      )}

      <LogInModal isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)} />
      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </div>
  );
}
