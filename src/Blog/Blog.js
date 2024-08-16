import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css'; 
import blogPosts from './blogPosts.json';

function Blog() {
    return (
        <div className="blog-list">
            {blogPosts.map(post => (
                <div key={post.id} className="blog-preview">
                    <div className="blog-info">
                        <h2>
                            <Link to={`/blog/${post.id}`}>
                                {post.title}
                            </Link>
                        </h2>
                        <p className="blog-meta">By {post.author} | {post.date} | {post.readTime}</p>
                    </div>
                    <img src="/devin.png" alt={post.title} className="blog-thumbnail-preview" />
                </div>
            ))}
        </div>
    );
}

export default Blog;
