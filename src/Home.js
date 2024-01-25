import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data);
            setBlogs(data);
        })
      }, [])

    return(
        <div className="home">
            {/* wait for the blogs to load after data fetch and then execute comonent based on condition */}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
        </div>
    );
}

export default Home;