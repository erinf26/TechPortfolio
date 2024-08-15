import React from 'react';
import './Home.css'; 
import me from './assets/me.png';

function Home() {
  return (
    <div>
      <div className="gradient-banner">
        <div className="content-box">
          <h1>Hi, I'm Erin Foley.</h1>
          <p>
            I am a computer programmer using code to impact social change. My interests include SWE, AI Decision Making, LLMs/NLP, Cyber Security, UX, and Product Management.
          </p>
        </div>
      </div>

      <div className="about-section">
        <img src={me} alt="Erin Foley" className="about-image"/>
        <div className="about-text">
            <h2>Who I am.</h2>
            <p>
                I am a Computer Science major at Yale University with a passion for technology that creates social change. In my studies of CS, Psychology, and humanities disciplines, I seek to identify intersections between robotic capabilities and human issues to create technology that impacts policy and changes governing social opinions.
            </p>
            <p>
                I have experience working on research teams at the National Aeronautics and Space Administration; experience developing and teaching curriculums in Machine Learning, Large Language Models, and array of SWE topics @ Joe and Clara Tsai Foundation, Curious Cardinals, and Kode With Klossy; and experience building products for classes and competitions leveraging different computer languages (Python, Swift, Java, JavaScript, HTML/CSS, Solidity, C/C++, Racket, and more) and tools (ArcGIS, Google Earth Engine, RabbitMQ, XCode, MongoDB, Pocketbase, and more). On all teams that I'm a part of, there is a diversity in personal background and academic discipline that promotes creative solutions. I want to continue to work on these types of teams to bring innovative solutions to light that I wouldn't see without such diversity of thought and experience.
            </p>
            <p>
                My background involves data visualization/analysis (I have submitted research abstract with NASA to 6 conferences over the pat 4 years), UI/UX for mobile app development (placed 1st in a regional history competition in 2021 and 2nd in a global app competition for SAP in 2021), cryptography/cybersecurity, and programming with advanced data structures + algorithms. I hope to put these skills to use to identify solutions for global issues as well as users' imminent needs for private companies.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
