import { useState } from "react";
import BigButton from "../BigButton/BigButton.jsx";
import css from "./AuthNav.module.css";
import LogInModal from "../LogInModal/LogInModal.jsx";
import RegistrationModal from "../RegistrationModal/RegistrationModal.jsx";

export default function AuthNav() {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  return (
    <div className={css.auth}>
      <button className={css.log} onClick={() => setIsLogInOpen(true)}>
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
      <BigButton
        title="Registration"
        onClick={() => setIsRegistrationOpen(true)}
      />

      {/* <p className={css.hello}>Hello, User</p> */}

      <LogInModal isOpen={isLogInOpen} onClose={() => setIsLogInOpen(false)} />

      <RegistrationModal
        isOpen={isRegistrationOpen}
        onClose={() => setIsRegistrationOpen(false)}
      />
    </div>
  );
}
