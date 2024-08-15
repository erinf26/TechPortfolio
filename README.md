# Tech Portfolio from Scratch

I want to make personal portfolio websites easy and accessible for students who aren't in tech or who are just beginning. For a long time, I used a low-code/no-code website developer to make my Portfolio and although there are many perks to that, if you want to show off some technical skills/that you take more initiative to employers, full-stack development is the way to go!

I built this project from scratch (though I guess "from scratch" is a relative term to developers...) using React, Bootstrap, and Node.js. It includes homepage, resume, research, projects, and blog pages, and is designed to showcase your work and accomplishments.

Note that when I write "UP TO YOU" in the comments within the code, I am encouraging you to 
change the line of code (be it for color, font, image, content, etc.) to make your website your own!

## Project Setup

### 1. Initial Setup
- Created a GitHub repository and initialized the project.
- Installed `Visual Studio Code` as the code editor.
- Set up a Node.js project by running:
  ```bash
  npm init -y
- Installed React and other dependencies
    npm install react react-dom
- Installed Bootstrap and Bootstrap React Components
    npm install bootstrap react-bootstrap
- Imported Bootstrap CSS in the index.js file:
    import 'bootstrap/dist/css/bootstrap.min.css';

### 2. React Router Setup
- Installed React Router (for page navigation)
    npm install react-router-dom
- Configured routes in App.js using Routes and Route
- Added NavBar Component to go between pages
- Configured React 18
- Created basic Node.js server to handle backend requests

### 3. Running the Project
- Start the React server
    npm start
- Start the Node.js backend server
    npm run server


### Note: References
I want to acknowledge a couple of really great articles I used to develop my portfolio website. 

Back-end:

Front-end:

Design:
Liew, Zell. "The Best Font Loading Strategies and How to Execute Them", CSS Tricks (https://css-tricks.com/the-best-font-loading-strategies-and-how-to-execute-them/#loading-fonts-with-self-hosted-fonts). This article reiterates a lesson I've learned, that self-hosting fonts is a much better approach than using a cloud-based provider. However, self-hosting costs $$$ (though there are places to get font bundles for cheap) and a portfolio isn't typically too dynamic/interactive, so for now, this template shows how to load fonts from the cloud (specifically, Google Fonts).


