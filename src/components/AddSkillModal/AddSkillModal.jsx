// AddSkillModal.js
import React from "react";
import "./AddSkillModal.css";

const AddSkillModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <h1>Add Skill</h1>
        <div className="form-group">
          <label htmlFor="domain">Domain</label>
          <input
            type="text"
            id="domain"
            name="domain"
            placeholder="Front End Developer"
          />
        </div>
        <div className="form-group">
          <label>Skills</label>
          <div className="skills-header">
            <span>Skill</span>
            <span>Proficiency (%)</span>
          </div>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="skill-row">
              <input type="text" className="skill-input" placeholder="Skill" />
              <input
                type="number"
                className="proficiency-input"
                placeholder="%"
              />
            </div>
          ))}
        </div>
        <div className="button-group">
          <button className="add-button">ADD SKILL</button>
          <button className="cancel-button" onClick={onClose}>
            CANCEL
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddSkillModal;
