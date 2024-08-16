import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './Home/TopBar';
import Home from './Home/Home';
import Resume from './Resume/Resume';
import Research from './Research/Research';
import Projects from './Projects/Projects';
import Blog from './Blog/Blog';
import FullBlogPost from './Blog/FullBlogPost';
import blogPosts from './Blog/blogPosts.json';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/research" element={<Research />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
                {blogPosts.map(post => (
                    <Route
                        key={post.id}
                        path={`/blog/${post.id}`}
                        element={
                            <FullBlogPost
                                title={post.title}
                                thumbnail={post.thumbnail}
                                caption="After reading a blog post, Devin runs ControlNet on Modal to produce images with concealed messages for Sara. Cognition Labs."
                                content={post.content}
                            />
                        }
                    />
                ))}
            <Route path="/" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
