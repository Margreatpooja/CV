import React from "react";
import { useRef } from "react";

function Contact({ contact_data, setShowcontact }) {
  const contactRef = useRef();
      const handleBackgroundClick = (e) => {
          if (e.target === contactRef.current) {
              setShowcontact(false); 
          }
      }
  return (
    <div className="text-white blur-bg"
    ref={contactRef}
    onClick={handleBackgroundClick} 
    >
      <div className="midbox">
        <button
          type="button"
          className="btn btn-outline-light"
          onClick={() => setShowcontact(null)} // closes modal
        >
          <i className="bi bi-x-square"></i>
        </button>
        <div className="content-box overflow-scroll">
          <h4>Contact</h4>
          {contact_data.map((item, idx) => (
            <p key={idx}>{item.text}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
