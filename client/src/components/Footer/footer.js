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
        Created with React
      </footer>
      {/* <p className="footer-creation">
                Created by
            </p>
            <div className="input-areas">
                <form>
                    <input type="email" name="email" placeholder="Your email" />
                </form>
            </div> */}
    </div>
  );
}

export default Footer;
