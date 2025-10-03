
import React, { useRef, useState, useEffect } from "react";

function Aboutme({showmodel, setShowmodel  }) {
 
    const touchRef = useRef();
    const handleBackgroundClick = (e) => {
        if (e.target === touchRef.current) {
            setShowmodel(false); 
        }
    }
    
  return (
    <div className="text-white blur-bg "
    ref={touchRef}
    onClick={handleBackgroundClick} 
    >
      <div className="midbox">
        <button type="button" 
        className="btn btn btn-outline-light"
        onClick={() => setShowmodel(false)} aria-label="Close"
        >
          <i className="bi bi-x-square"></i>
        </button>
        <div className="content-box overflow-scroll">
          <h4>About Me</h4>
          <p>
            Hi, I’m Pooja Margriet. I started my journey in
            <span className="text-success glowtext"> Computer Science Engineering</span> , and over time I’ve grown
            into a developer who loves building things that people can actually
            use. I work mainly with
            <span className="text-success glowtext"> JavaScript, React.js, HTML, CSS, SQL, and Bootstrap</span>,
            creating clean,responsive, and user-friendly applications. I’ve also
            had the chance to work on Ground Control Station software for
            drones, which taught me how exciting it is to connect software with
            real-world systems. I enjoy learning and working with tools like
            <span className="text-success glowtext"> GitHub and Canva</span>,and I really value being part of teams
            where idea can be shared and improved together. More than anything,
            I’m curious, eager to learn, and always looking for ways to use
            technology to make an impact.
          </p>
        </div>
      </div>
    </div>
  );
}


export default Aboutme;
