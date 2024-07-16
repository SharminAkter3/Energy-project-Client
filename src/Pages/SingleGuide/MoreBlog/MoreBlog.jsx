import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const MoreBlog = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    };

    return (
        <div className="section-container mb-40">
            <div className="mx-40 mb-5 mt-10">
                <h1 className='h1-text'>
                    <p className='text-black'>Explore more blog</p>
                </h1>
            </div>

            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>
                    {blogs.slice(0, 3).map(blog => (
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


        </div>
    );
};

export default MoreBlog;