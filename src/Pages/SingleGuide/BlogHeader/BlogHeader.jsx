import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogHeader = () => {
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
        <div className="section-container">
            {blog.subTitles && blog.subTitles.length > 0 && (
                <div className="text-left mt-4">
                    {blog.subTitles.map((subTitle, index) => (
                        <div key={index} className="mb-4">
                            <div className="text-left mx-40 mb-5">
                                <h1 className='h1-text'>
                                    <p className='text-black'>{subTitle.subTitlePrefix}</p>
                                </h1>
                            </div>
                            <div className="text-left mx-40">
                                <p className="text-[#6D6D6D]">{subTitle.subTitleDescription}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }

            {blog.sections && blog.sections.length > 0 && (
                <div className="text-left mt-40">
                    {blog.sections.map((section, index) => (
                        <div key={index} className="mb-4">
                            <div className="text-left mx-40 mb-5">
                                <h1 className='h1-text'>
                                    <p className='text-black'>{section.title}</p>
                                </h1>
                            </div>
                            <div className="text-left mx-40 mb-5">
                                <h1 className='h1-text'>
                                    <p className='text-black'>{section.prefix}</p>
                                </h1>
                            </div>
                            <div className="text-left mx-40">
                                <p className="text-[#6D6D6D]">{section.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
            }


        </div >
    );
};

export default BlogHeader;