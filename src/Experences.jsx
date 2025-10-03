import React from "react";
import { useRef } from "react";

function Experences({ office_data , setShowexperences }) {
    const tapRef = useRef();
            const handleBackgroundClick = (e) => {
                if (e.target === tapRef.current) {
                    setShowexperences(false); 
                }
            }
  return (
    <div className="text-white blur-bg"
    ref={tapRef}
    onClick={handleBackgroundClick} 
    >
      <div className="midbox">
        <button type="button" 
        className="btn btn btn-outline-light"
        onClick={() => setShowexperences(false)} aria-label="Close"
        >
          <i className="bi bi-x-square"></i>
        </button>
        <div className="content-box overflow-scroll">
          <h4>Experences</h4>
          {office_data.map((item, idx) => (
            <div>
              <p>{item.text}</p>
              <div>
                <img
                src={item.img}
                className="w-50 h-50 d-flex justify-content-center m-auto border border-2 border-warning rounded-2"
                alt={`img-${idx}`}
              />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experences;
