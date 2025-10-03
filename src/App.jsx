import React, { useState } from "react";
import about_me from "./assets/about_me.jpg";
import Education_image from "./assets/Education_image.jpg";
import experences_image from "./assets/experences_image.jpg";
import Project_image from "./assets/Project_image.jpg";
import clg from "./assets/clg.jpg";
import besant from "./assets/besant.jpg";
import office from "./assets/office.jpg";

import Navbar from "./Navbar";
import Home from "./Home";
import Aboutme from "./Aboutme";
import Education from "./Education";
import Experences from "./Experences";
import Project from "./Project";
import Contact from "./Contact";

function App() {
  const [modalType, setModalType] = useState(null); // 'about', 'education', 'experences'
  const [activeIndex, setActiveIndex] = useState(null);
  const images = [about_me, Education_image, experences_image, Project_image];

  const clg_data = [
    {
      img: clg,
      text: "Bachelor of Engineering (B.E.),Computer Science Engineering St.Peter’s College, Avadi — Graduated: May 2021",
    },
    {
      img: besant,
      text: "Full Stack Development Training Besant Technologies — Completed: September 2025",
    },
    {
      img: Education_image,
      text: "Tools & Technologies: HTML, CSS, JavaScript, React.js, Bootstrap, SQL, GitHub, Canva",
    },
  ];

  const office_data = [
    {
      img: office,
      text: `
Flynet Technologies Pvt. Ltd. – Software Developer (UAS)
Jan 2024 – Oct 2024
Developed software solutions for Ground Control Stations (GCS) to manage and control drones in real time.
Built and optimized web-based applications using React.js and JavaScript for seamless user interaction.
Integrated flight control systems with GCS software, ensuring stability, navigation accuracy, and reliable communication.
Collaborated with hardware teams to troubleshoot drone performance issues and implement updates.
Conducted performance testing and debugging to ensure system reliability across various environments.
      `,
    },
  ];

  const project_data = [
    {
      text: "Instagram Clone:Developed a Instagram clone using React for the frontend",
    },
    {
      text: " login system :login system using SQL database for user authentication",
    },
  ];

  const contact_data = [
    {
      text: "Mobile_Number : 7358177639",
    },
    {
      text: "Mail_Id:margreatpooja@gmail.com",
    },
  ];

  const closeModal = () => setModalType(null);

  return (
    <div className="bg neon-circuit" style={{ position: "relative" }}>
      <Navbar
        modalType={modalType}
        setModalType={setModalType}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      <Home
        images={images}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setModalType={setModalType}
      />

      {modalType === "about" && <Aboutme setShowmodel={closeModal} />}
      {modalType === "education" && (
        <Education clg_data={clg_data} setShoweducation={closeModal} />
      )}
      {modalType === "experences" && (
        <Experences office_data={office_data} setShowexperences={closeModal} />
      )}
      {modalType === "project" && (
        <Project project_data={project_data} setShowproject={closeModal} />
      )}
      {modalType === "contact" && (
        <Contact contact_data={contact_data} setShowcontact={closeModal} />
      )}
    </div>
  );
}

export default App;
