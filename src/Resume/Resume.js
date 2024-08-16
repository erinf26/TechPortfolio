import React from 'react';
import './Resume.css';
import profIcon from '../assets/prof.png';
import eduIcon from '../assets/edu.png';
import skillsIcon from '../assets/skill.png';
import yale from '../assets/yale-cross-campus.png';
import pdfResume from '../assets/Resume.pdf';
import docResume from '../assets/Resume.docx';
import WorkExperience from './WorkExperience';

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
                <div className="experience-header">
                    <img src={profIcon} alt="Professional Experience" className="section-icon" />
                    <h2>Professional Experiences</h2>
                </div>
                <div className="experience-section">
                    <div className="experience-images">
                        <img src="/nasa1.jpeg" alt="NASA 1" className="experience-image" />
                        <img src="/nasa2.png" alt="NASA 2" className="experience-image" />
                        <img src="/nasa3.png" alt="NASA 3" className="experience-image-tall" />
                        <img src="/sjf.jpeg" alt="Social Justice Fund" className="experience-image" />
                    </div>
                    <div className="experience-details">
                        <WorkExperience
                            company="National Aeronautics and Space Administration"
                            location="New York, NY"
                            dates="June - August 2021, 2022, 2024"
                            roles={[
                                {
                                    title: "Machine Learning Research Intern",
                                    period: "June 2024 - August 2024",
                                    responsibilities: [
                                        "Optimized machine learning algorithms and visualized predictions of harmful algal blooms in New York State lakes using remote sensing data and Python",
                                        "Developed full-stack web app with Svelte and Pocketbase.io to visualize climate data/ML predictions",
                                        "Submitted abstracts to American Meteorological Society and American Geophysical Union"
                                    ]
                                }
                            ]}
                        />

                        <WorkExperience
                            company="National Aeronautics and Space Administration"
                            location="New York, NY"
                            dates="July 2022 - August 2022"
                            roles={[
                                {
                                    title: "Computer Science Research Intern",
                                    period: "July 2022 - August 2022",
                                    responsibilities: [
                                        "Quantified cooling impact of community-based climate change mitigation strategies",
                                        "Created scalable Python program to automate 3D-matrix storage of remote sensing raster data"
                                    ]
                                }
                            ]}
                        />

                        <WorkExperience
                            company="National Aeronautics and Space Administration"
                            location="New York, NY"
                            dates="June 2021 - August 2021"
                            roles={[
                                {
                                    title: "Computer Science Research Intern",
                                    period: "June 2021 - August 2021",
                                    responsibilities: [
                                        "Developed and investigated interdisciplinary research question concerning the relationship between historic redlining policies and current climate change experience",
                                        "Created heat maps using Google Earth Engine’s JavaScript API, ArcGIS, MATLAB, SQL",
                                        "Co-authored two papers for American Geological Union 2022 and Frontiers in Hydrology 2022",
                                        "Presented poster as primary author at the American Meteorological Society’s 21st annual meeting",
                                        "Resulted in Robert H. Goddard award from Goddard Institute for Space Studies awarded to team"
                                    ]
                                }
                            ]}
                        />

                        <WorkExperience
                            company="Clara and Joe Tsai Foundation Social Justice Fund"
                            location="New York, NY"
                            dates="June 2024 - Present"
                            roles={[
                                {
                                    title: "Program Manager of AI Summer Bootcamp",
                                    period: "May 2024 - August 2024",
                                    responsibilities: [
                                        "Developed and taught 5-week curriculum in LLMs and Machine Learning, including 10 coding projects with Python and HuggingFace",
                                        "Recruited and managed 16 teaching assistants; assessed responsibilities, payments, performance"
                                    ]
                                }
                            ]}
                        />
                    </div>
                </div>
            </div>

            <div className="resume-section education-section">
                <div className="experience-header">
                    <img src={eduIcon} alt="Education" className="section-icon" />
                    <h2>Education</h2>
                </div>
                <div className="section-content">
                    <div>
                        <img src={yale} alt="Yale Cross Campus" className="education-image" />
                    </div>
                    <h3>Yale University, New Haven, CT</h3>
                    <p className="education-dates">Expected Graduation 2026</p>
                    <p className="education-degree">BS in Computer Science - 3.94 GPA</p>
                    <p className="education-coursework">
                        <strong>Relevant Coursework:</strong> Introduction to Computer Science; Data Structures and Programming Techniques; Introduction to Blockchains, Cryptocurrencies, Smart Contracts, and Decentralized Applications; Mathematical Tools for Computer Science (Discrete Mathematics); Introduction to Machine Learning; Algorithms; Cognitive Science of Large Language Models; Introduction to Systems Programming and Computer Organization (IP); Computational Intelligence for Games (IP)
                    </p>
                    <p className="education-coursework">
                        <strong>Relevant Clubs/Organizations:</strong> Society of Women Engineers, Rewriting the Code, Yale Entrepreneurial Society Incubator, Young Entrepreneurs Program (President).
                    </p>
                </div>
            </div>

            <div className="resume-section">
                <div className="experience-header">
                    <img src={skillsIcon} alt="Skills & Other" className="section-icon" />
                    <h2>Skills & Other</h2>
                </div>
                <div className="section-content">
                    <div className="skills-list">
                        <p><strong>Programming Languages:</strong> Python, Java, C/C++, JavaScript, Swift, HTML/CSS, Solidity, Racket</p>
                        <p><strong>Tools & Technologies:</strong> Git, Xcode, Google Earth Engine, ArcGIS, React, Node.js, SQL, Express, RabbitMQ/Messaging Queues, Object Oriented Programming, Machine Learning, Natural Language Processing</p>
                        <p><strong>Soft Skills:</strong> Leadership, Team Collaboration, Communication, Problem Solving, Critical Thinking</p>
                        <p><strong>Other Interests:</strong> Data Visualization, Cyber Security, AI Decision Making, User Research, UX Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resume;
