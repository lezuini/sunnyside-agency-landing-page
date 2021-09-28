import { useEffect, useState } from "react";

import { ReactComponent as Logo } from "../images/logo.svg";

const Header = () => {
  const [active, setActive] = useState(false);
  const [hidden, setHidden] = useState(
    document.body.clientWidth <= 800 ? false : true
  );

  const [opacityFix, setOpacityFix] = useState(false);

  window.addEventListener("resize", function (e) {
    if (document.body.clientWidth <= 800) {
      if (hidden) {
        setHidden(false);
        setOpacityFix(true);
      }
    } else {
      if (!hidden) {
        setHidden(true);
      }
    }
  });

  useEffect(() => {
    setTimeout(() => {
      setOpacityFix(false);
    }, 1000);
  }, [opacityFix]);

  return (
    <header>
      <div className="container">
        <div className="logo">
          <Logo />
        </div>
        <nav className={active ? "expand" : opacityFix ? "hidden" : undefined}>
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
              ? "hamburger hamburger--squeeze hidden"
              : active
              ? "hamburger hamburger--squeeze is-active"
              : "hamburger hamburger--squeeze"
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
