// Skills.js
import React, { useState } from "react";
import "./Skills.css";
import AddSkillModal from "../AddSkillModal/AddSkillModal";

const skillsData = [
  {
    category: "Front End Development",
    skills: [
      { name: "Html", level: "90%" },
      { name: "CSS", level: "85%" },
      { name: "Js", level: "80%" },
      { name: "PHP", level: "75%" },
      { name: "WordPress", level: "85%" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Hindi", level: "90%" },
      { name: "English", level: "85%" },
    ],
  },
  {
    category: "Back End Development",
    skills: [
      { name: "NodeJS", level: "90%" },
      { name: "SSR", level: "85%" },
    ],
  },
  {
    category: "Front End Development",
    skills: [
      { name: "Html", level: "90%" },
      { name: "CSS", level: "85%" },
      { name: "Js", level: "80%" },
      { name: "PHP", level: "75%" },
      { name: "WordPress", level: "85%" },
    ],
  },
  {
    category: "Languages",
    skills: [
      { name: "Hindi", level: "90%" },
      { name: "English", level: "85%" },
    ],
  },
  {
    category: "Back End Development",
    skills: [
      { name: "NodeJS", level: "90%" },
      { name: "SSR", level: "85%" },
    ],
  },
];

const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="skills-container">
      <h1>Skills & Languages</h1>
      <p>
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet
        Sint, Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
      </p>
      <div className="skills-grid">
        {skillsData.map((category, index) => (
          <div key={index} className="skill-category">
            <h2>{category.category}</h2>
            {category.skills.map((skill, i) => (
              <div key={i} className="skill">
                <span>{skill.name}</span>
                <div className="skill-bar">
                  <div
                    className="skill-level"
                    style={{ width: skill.level }}
                  ></div>
                </div>
                <span className="skill-percent">{skill.level}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button className="add-skill-button" onClick={openModal}>
        ADD SKILL
      </button>
      <AddSkillModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Skills;
