import React from "react";

function Home({
  images,
  setModalType,
  activeIndex,
  setActiveIndex,
  
}) {
  const texts = ["AboutMe", "Education", "Experiences", "Projects"];
  const modalMap = [
    "about",
    "education",
    "experences",
    "project",
    "contact",
    null,
  ];

  return (
    <div>
      <div className="d-flex gap-6 flex-column justify-content-center align-items-center mt-5">
        <p className="Home d-flex justify-content-around align-items-center">
          Pooja Margriet
        </p>
        <button
          type="button"
          className="btn custom-btn"
          onClick={() => setModalType("contact")}
          aria-label="Close"
        >
          Contact me
        </button>
      </div>

      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-4 g-4">
          {images.map((img, idx) => (
            <div
              className="col text-white card"
              key={idx}
              id={texts[idx].toLowerCase().replace(/\s+/g, "_")}
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseLeave={() => setActiveIndex(null)}
              onClick={() => modalMap[idx] && setModalType(modalMap[idx])}
            >
              {activeIndex === idx ? (
                <div className="card-body card_hover">
                  <h5 className="m-5">{texts[idx]}</h5>
                </div>
              ) : (
                <img src={img} className="img-fluid" alt={`img-${idx}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
