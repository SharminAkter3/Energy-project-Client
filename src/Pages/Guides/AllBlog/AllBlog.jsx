import { Link } from "react-router-dom";

const AllBlog = () => {
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

                <div className='card-container'>
                    <div className="card w-96 shadow-xl no-rounded bg-[#4CAF50]">
                        <figure className="no-rounded">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className="no-rounded card-image-style" />
                        </figure>
                        <div className="card-body-style items-center text-center no-rounded">
                            <h2 className="card-title-style">Blog</h2>
                            <p className='card-description'>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="mb-3">
                                <button className='button'><Link to="/single_guide">Read More</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 shadow-xl no-rounded bg-[#4CAF50]">
                        <figure className="no-rounded">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className="no-rounded card-image-style" />
                        </figure>
                        <div className="card-body-style items-center text-center no-rounded">
                            <h2 className="card-title-style">Shoes!</h2>
                            <p className='card-description'>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="mb-3">
                                <button className='button'><Link to="/single_guide">Read More</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 shadow-xl no-rounded bg-[#4CAF50]">
                        <figure className="no-rounded">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                                alt="Shoes"
                                className="no-rounded card-image-style" />
                        </figure>
                        <div className="card-body-style items-center text-center no-rounded">
                            <h2 className="card-title-style">Shoes!</h2>
                            <p className='card-description'>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="mb-3">
                                <button className='button'><Link to="/single_guide">Read More</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div>
    );
};

export default AllBlog;