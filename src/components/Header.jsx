import { useState } from "react";

import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(false);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <nav>
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>
              <button>Contact</button>
            </li>
          </ul>
        </nav>
        <button
          className={
            hidden
              ? active
                ? "hamburger hamburger--squeeze is-active"
                : "hamburger hamburger--squeeze"
              : "hamburger hamburger--squeeze hidden"
          }
          type="button"
          onClick={() => setActive(!active)}
        >
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
