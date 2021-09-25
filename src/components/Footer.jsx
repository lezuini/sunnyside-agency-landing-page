import { ReactComponent as Logo } from "../images/logo.svg";

import { ReactComponent as FacebookIcon } from "../images/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "../images/icon-instagram.svg";
import { ReactComponent as TwitterIcon } from "../images/icon-twitter.svg";
import { ReactComponent as PinterestIcon } from "../images/icon-pinterest.svg";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <Logo />
      </div>
      <ul>
        <li>About</li>
        <li>Services</li>
        <li>Projects</li>
      </ul>
      <div className="social">
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
        <PinterestIcon />
      </div>
    </footer>
  );
};

export default Footer;
