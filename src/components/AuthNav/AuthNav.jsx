import { useState } from "react";
import BigButton from "../BigButton/BigButton.jsx";
import css from "./AuthNav.module.css";
import LogInModal from "../LogInModal/LogInModal.jsx";
import RegistrationModal from "../RegistrationModal/RegistrationModal.jsx";
import { logOutUser } from "../firebase/firebaseAuth.js";
import { getAuth } from "firebase/auth";

export default function AuthNav() {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const auth = getAuth();
  const user = auth.currentUser;

  const handleLogOut = async () => {
    try {
      await logOutUser();
      alert("Successfully logged out!");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  };

  return (
    <div className={css.auth}>
      {user ? (
        <>
          <button className={css.log} onClick={handleLogOut}>
            <svg width="20" height="20" className={css.logIcon}>
              <use href="public/sprite.svg#logout" />
            </svg>
            <span>Log out</span>
          </button>
          <p className={css.hello}>Hello, {user.displayName}</p>
        </>
      ) : (
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
