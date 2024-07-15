import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const AllBlog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://energy-project-server.vercel.app/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    };

    return (
        <div>
            <div className="section-container">
                <div>
                    <small className='section-title'>Blog</small>
                </div>
                <div>
                    <h1 className='h1-text'>
                        <p className='text-black'>Stay Informed with the <br />Latest in Energy Solutions</p>
                    </h1>
                </div>
                <div>
                    <p className="text-[#6D6D6D]">
                        Dive into our blog for expert insights, industry trends, and practical tips on renewable energy. Discover how you can <br /> maximize efficiency, reduce costs, and contribute to a sustainable future. Join the conversation and stay ahead with <br /> [Company Name]s expert advice and updates.
                    </p>
                </div>

                <div className='flex justify-center items-center'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>
                        {blogs.map(blog => (
                            <div key={blog._id} className='card w-96 shadow-xl no-rounded bg-[#4CAF50]'>
                                <figure className='no-rounded'>
                                    <img
                                        src={blog.ctaImage}
                                        alt={blog.headerTitle}
                                        className='no-rounded card-image-style'
                                    />
                                </figure>
                                <div className='p-6 items-center no-rounded'>
                                    <h2 className='text-left card-title-style'>{blog.headerTitle}</h2>
                                    <p className='text-left mb-3 text-[#C8EAC9]'>
                                        {truncateDescription(blog.titleDescription, 20)}
                                    </p>
                                    <div className='mb-3'>
                                        <button className='button w-full'>
                                            <Link to={`/single_guide/${blog._id}`}>Read More</Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div >
        </div>
    );
};

export default AllBlog;