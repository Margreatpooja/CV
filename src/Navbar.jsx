import React, { useState } from "react";

function Navbar({ activeIndex, setActiveIndex }) {
  const navbar = ["AboutMe", "Education", "Experiences", "Projects"];
  return (
    <div className="navbar-wrapper">
      <div className="navbar custom_navbar d-flex justify-content-around align-items-center flex-wrap">
      {navbar.map((item, idx) => (
        <strong
          className={`navbar-item${activeIndex === idx ? " active" : ""}`}
          key={idx}
          onClick={() => {
            document
              .getElementById(item.toLowerCase().replace(/\s+/g, "_"))
              .scrollIntoView({ behavior: "smooth" });
            setActiveIndex(idx);
          }}
        >
          {item}
        </strong>
      ))}
    </div>
    </div>
    
  );
}

export default Navbar;
