import React from "react";
import { useRef } from "react";

function Education({ clg_data , setShoweducation }) {
    const clickRef = useRef();
        const handleBackgroundClick = (e) => {
            if (e.target === clickRef.current) {
                setShoweducation(false); 
            }
        }
    
  return (
    <div className="text-white blur-bg"
    ref={clickRef}
    onClick={handleBackgroundClick} 
    
    >
      <div className="midbox">
        <button type="button" 
        className="btn btn btn-outline-light"
        onClick={() => setShoweducation(false)} aria-label="Close"
        >
          <i className="bi bi-x-square"></i>
        </button>
        <div className="content-box overflow-scroll">
          <h4>Education</h4>
          

         {clg_data.map((item, idx) => (
            <>
            <div key={idx} className="mb-3">
              <p className="m-4">{item.text}</p>
            </div>
		<img
                src={item.img}
                className="education-img img-fluid mx-auto d-block mb-4 border border-2 border-warning rounded-2"
                alt={`img-${idx}`}
              />
              </>

		))}
       

         
          

        </div>
      </div>
    </div>
  );
}

export default Education;
