import React from 'react';
import { Link } from 'react-router-dom';
import './BlogPost.css';

function BlogPost({ id, title, author, date, readTime, content }) {
    const thumbnail = "/devin.png"; // Set a default image

    return (
        <div className="blog-post">
            <div className="title-and-meta">
                <h1>
                    <Link to={`/blog/${id}`} className="blog-title-link">
                        {title}
                    </Link>
                </h1>
                <p className="blog-meta">By {author} | {date} | {readTime}</p>
            </div>
            <div className="image-and-title">
                <div className="image-container">
                    <img src={thumbnail} alt={title} className="blog-thumbnail" />
                    <figcaption>
                        <a href="https://www.cognition.ai/blog/introducing-devin" target="_blank" rel="noopener noreferrer">
                            After reading a blog post, Devin runs ControlNet on Modal to produce images with concealed messages for Sara. Cognition Labs.
                        </a>
                    </figcaption>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;
