import { useState } from "react";

import DesktopGraphicDesign from "../images/desktop/image-graphic-design.jpg";
import DesktopPhotography from "../images/desktop/image-photography.jpg";
import MobileGraphicDesign from "../images/mobile/image-graphic-design.jpg";
import MobilePhotography from "../images/mobile/image-photography.jpg";

const Features = () => {
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
    <div className="features">
      <div className="feature">
        <img
          src={mobile ? MobileGraphicDesign : DesktopGraphicDesign}
          alt="Graphic Design"
        />
        <div className="text cherry">
          <h2>Graphic design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’
            attention.
          </p>
        </div>
      </div>
      <div className="feature">
        <img
          src={mobile ? MobilePhotography : DesktopPhotography}
          alt="Photography"
        />
        <div className="text orange">
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
