import React from "react";
import { useRef } from "react";


function Project({ project_data, setShowproject }) {
    const doubleRef = useRef();
            const handleBackgroundClick = (e) => {
                if (e.target === doubleRef.current) {
                    setShowproject(false); 
                }
            }
  return (
    <div className="text-white blur-bg "
    ref={doubleRef}
    onClick={handleBackgroundClick} 
    >
      <div className="midbox">
         <button type="button" 
        className="btn btn btn-outline-light"
        onClick={() => setShowproject(false)} aria-label="Close"
        >
          <i className="bi bi-x-square"></i>
        </button>
        <div className="content-box overflow-scroll">
          <h4>Projects</h4>
          {project_data.map((item, idx) => (
            <div key={idx} className="mb-3">
              <p className="m-4">{item.text}</p>
             
            </div>
            
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
