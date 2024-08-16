import React from 'react';
import './FullBlogPost.css';

function FullBlogPost({ title, caption, content }) {
    return (
        <div className="full-blog-post">
            <h1>{title}</h1>
            <img src="/devin.png" alt={"Devin Thumbnail"} className="blog-thumbnail" />
            <figcaption>
                <a href="https://www.cognition.ai/blog/introducing-devin" target="_blank" rel="noopener noreferrer">
                    {caption}
                </a>
            </figcaption>
            <div className="blog-content">
                {content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </div>
    );
}

export default FullBlogPost;
