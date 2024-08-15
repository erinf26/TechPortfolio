const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

/*
To handle our blog posts, we need to fetch data from the backend.
We'll set up a REST API in Express.

The route to fetch blog posts is /api/posts. This serves the blog posts as
a JSON response. 
*/
app.get('/api/posts', (req, res) => {
    const posts = [
        { id: 1, title: 'First Post', content: 'This is my first post!'},
        { id: 2, title: 'Second Post', content: 'This is my second post!'},
    ];
    res.json(posts);
});

/*
The route '/' just confirms that the server is running. 
If you go to http://localhost:3001/, it should display "Backend is running"
or whatever you put in res.send().
*/
app.get('/', (req, res) => {
    res.send('Backend is running');
});

app.listen(PORT, () => {
    /* Make sure (!!!) you use back ticks ` rather than
       double- or single-quotes in the following line.
       Back ticks must be used for template literals, 
       which allow us to interpolate variables in strings.
    */
    console.log(`Server is running on port ${PORT}`);
});

