import React from "react";

function Footer() {
  return (
    <div className="footer-container">
      <footer
        className="fixed-bottom"
        style={{
          height: "30px",
          bottom: 0,
          width: "100%",
          color: "white",
          backgroundColor: "darkslateblue",
          textAlign: "center",
          borderTop: "2px solid lightblue",
          padding: "5px",
        }}
      >
        <h6>Created with React</h6>
      </footer>
    </div>
  );
}

export default Footer;
