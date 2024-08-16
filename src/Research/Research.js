import React from 'react';
import './Research.css'; 
import sunAnimated from '../assets/sun.mp4'
import treeAnimated from '../assets/tree.mp4'

function Research() {
    return (
        <div className="research-page">
            <div className="gradient-banner">
                <div className="content-box">
                <h1>Research.</h1>
                <p>
                   Take a deeper dive into the research I've conducted, on a team or individually.
                </p>
                </div>
            </div>
            
            <div className="research-section">
            <   div className="title-and-logo">
                    <img src="/law.png" alt="Law Research Logo" className="research-logo" />
                    <h2>Coming Fall 2024 - Implications of Natural Language Processing for Legal Analysis</h2>
                </div>
            </div>

            <div className="research-section">
                <div className="title-and-logo">
                    <img src="/lake.png" alt="Lake Research Logo" className="research-logo" />
                    <h2>Monitoring and Studying Lakes from Space in a Changing Climate (2024)</h2>
                </div>
                <p className="research-description">
                    This past summer, I engaged in a 10-week research project using machine learning to monitor and assess algae in New York state lakes — research is of increased interest as the climate warms and algal bloom seasons lengthen. I helped optimize a Random Forest Regressor to predict chlorophyll-a from remote sensing data, used Pandas and Seabon to generate figures and provide data analysis for a paper, and built a program to visualize our predictions over rasters, creating powerful visualizations of temporal and spatial trends in algae across our state.
                </p>
                <ul className="research-links">
                    <li><a href="/assets/lakes-abstract.pdf" className="research-button" target="_blank">Abstract</a></li>
                    <li><a href="/assets/lakes-poster.pdf" className="research-button" target="_blank">Poster</a></li>
                </ul>
            </div>

            <div className="research-section">
                <div className="title-and-logo">
                    <video className="research-video" src={sunAnimated} autoPlay loop muted />
                    <h2>Urban Heat Island (2022)</h2>
                </div>
                <p className="research-description">
                    At NASA's Climate Change Research Initiative, I worked under the mentorship of Dr. Hamidreza Norouzi and Dr. Reginald Blake to assess the extent to which community-based solutions to Urban Heat Islands, such as open fire hydrants and community gardens, have a cooling impact.
                </p>
                <ul className="research-links">
                    <li><a href="/assets/uhi-abstract-2022.pdf" className="research-button" target="_blank">Abstract</a></li>
                    <li><a href="/assets/uhi-poster-2022.pdf" className="research-button" target="_blank">Poster</a></li>
                </ul>
            </div>

            <div className="research-section">
                <div className="title-and-logo">
                    <video className="research-video" src={treeAnimated} autoPlay loop muted />
                    <h2>Urban Heat Island (2021)</h2>
                </div>
                <p className="research-description">
                    At NASA's Climate Change Research Initiative, I worked under the mentorship of Dr. Hamidreza Norouzi and Dr. Reginald Blake to assess how Urban Heat Islands in Brooklyn, New York are intensifying. With code, I assessed the relationship between climate-related variables and a neighborhood's historic redlining policy to direct policy to mitigate climate change impacts in historically underserved neighborhoods. I presented my poster as the Primary Author at the American Meteorological Society's 21st Annual 2021.
                </p>
                <ul className="research-links">
                    <li><a href="/assets/uhi-abstract-2021.pdf" className="research-button" target="_blank">Abstract</a></li>
                    <li><a href="/assets/uhi-poster-2021.pdf" className="research-button" target="_blank">Poster</a></li>
                </ul>
            </div>

            <div className="research-section">
                
                <div className="title-and-logo">
                    <img src="/stem.png" alt="STEM Research Logo" className="research-logo" />
                    <h2>Gender and Race Diversity in STEM (2021)</h2>
                </div>
                <p className="research-description">
                    In my junior year of high school, I conducted an independent study under the mentorship of Dr. Bill Meyer investigating the "exit ramps" taken by women, people of color, and other minority groups out of educational/occupational STEM. The research led me to develop a Web Dev Curriculum aimed to make computer science more engaging for younger generations of these minority groups, the result of an extensive literature review + discussion. Read my paper and view my web dev curriculum below!
                </p>
                <ul className="research-links">
                    <li><a href="/assets/stem-research.pdf" className="research-button" target="_blank">Research paper</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Research;
