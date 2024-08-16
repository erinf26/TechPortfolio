import React from 'react';
import './Resume.css';
import profIcon from '../assets/prof.png';
import eduIcon from '../assets/edu.png';
import skillsIcon from '../assets/skill.png';
import pdfResume from '../assets/Resume.pdf';
import docResume from '../assets/Resume.docx';

function Resume() {
    return (
        <div>
            <div className="gradient-banner">
                <div className="content-box">
                    <h1>Resume</h1>
                        <p>Download the most recent version of my resume at the button below in .pdf or .docx format or scroll through an interactive version.</p>
                        <div className="download-buttons">
                            <a href={pdfResume} download="Erin_Foley_Resume.pdf" className="btn">Download PDF</a>
                            <a href={docResume} download="Erin_Foley_Resume.docx" className="btn">Download DOCX</a>
                        </div>
                </div>
            </div>

            <div className="resume-section">
                <img src={profIcon} alt="Professional Experience" className="section-icon" />
                <h2>Professional Experiences</h2>
                <div className="section-content">
                    {/* Add your professional experience content here */}
                </div>
            </div>

            <div className="resume-section education-section">
                <img src={eduIcon} alt="Education" className="section-icon" />
                <h2>Education</h2>
                <div className="section-content">
                    {/* Add your education content here */}
                </div>
            </div>

            <div className="resume-section">
                <img src={skillsIcon} alt="Skills & Other" className="section-icon" />
                <h2>Skills & Other</h2>
                <div className="section-content">
                    {/* Add your skills content here */}
                </div>
            </div>
        </div>
    );
}

export default Resume;