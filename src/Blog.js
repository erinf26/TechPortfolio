import React, { useEffect, useState } from 'react';

function Blog() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('/api/posts')
            .then(response => response.json())
            .then(data => setPosts(data));
    }, []);

    return (
        <div>
            <h2>Blog Posts</h2>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                    <p>{post.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;

/*

This component serves our Blog content. We can include it
in our main App.js (or wherever you want to display the blog posts).

*/