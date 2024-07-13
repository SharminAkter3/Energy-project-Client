import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleGuideBanner = () => {

    const { id } = useParams();
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/blogs/${id}`)
            .then(response => response.json())
            .then(data => setBlog(data))
            .catch(error => console.error('Error fetching blog:', error));
    }, [id]);

    if (!blog) {
        return <div>Loading...</div>;
    }


    return (
        <div className='mt-20 mx-20'>
            <div className='container p-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div>
                        <div className='m-3'>
                            <small className='section-title'>{blog.headerTitle}</small>
                        </div>
                        <div className='m-3'>
                            <h1 className='h1-text'><p className='text-black'>{blog.titlePrefix}</p></h1>
                        </div>
                        <div className='font-bold m-3'>
                            {/* <h1>By {blog.author} / {new Date(blog.date).toLocaleDateString()}</h1> */}
                            <h1>By {blog.author} </h1>
                        </div>
                        <div className='m-3'>
                            <p className='p-text'>
                                <small className='text-[#6D6D6D]'>{blog.titleDescription}</small>
                            </p>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <img
                            className='rounded-xl w-full h-auto md:w-1/2 lg:w-3/4'
                            src={blog.ctaImage}
                            alt="mission-image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleGuideBanner;