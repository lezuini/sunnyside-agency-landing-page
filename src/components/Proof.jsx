const Proof = () => {
  return (
    <div className="proof">
      <div className="testimonials">
        <h2>Client testimonials</h2>
        <div className="container">
          <div className="testimony">
            <div className="avatar"></div>
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <strong>Emily R.</strong>
            <span>Marketing Director</span>
          </div>
          <div className="testimony">
            <div className="avatar"></div>
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <strong>Thomas S.</strong>
            <span>Chief Operating Officer</span>
          </div>
          <div className="testimony">
            <div className="avatar"></div>
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <strong>Jennie F.</strong>
            <span>Business Owner</span>
          </div>
        </div>
      </div>
      <div className="gallery">
        <div className="picture"></div>
        <div className="picture"></div>
        <div className="picture"></div>
        <div className="picture"></div>
      </div>
    </div>
  );
};

export default Proof;
