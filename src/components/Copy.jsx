import { useState } from "react";

import mobileStandOut from "../images/mobile/image-stand-out.jpg";
import mobileTransform from "../images/mobile/image-transform.jpg";
import desktopStandOut from "../images/desktop/image-stand-out.jpg";
import desktopTransform from "../images/desktop/image-transform.jpg";

const Copy = () => {
  const [mobile, setMobile] = useState(
    document.body.clientWidth < 401 ? true : false
  );

  window.addEventListener("resize", function (e) {
    if (document.body.clientWidth < 401) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  });

  return (
    <div className="copy">
      <div className="text">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <button>Learn more</button>
      </div>
      <div className="img">
        <img
          className="transform"
          src={mobile ? mobileTransform : desktopTransform}
          alt="Transform your brand"
        />
      </div>
      <div className="text audience">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <button>Learn more</button>
      </div>
      <div className="img">
        <img
          className="stand"
          src={mobile ? mobileStandOut : desktopStandOut}
          alt="Stand out"
        />
      </div>
    </div>
  );
};

export default Copy;
