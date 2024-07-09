import '../../../App.css';
import authorImage1 from '../../../assets/Images/Expert/author1.png';


const Review = () => {
    return (
        <div className="review-section-container container">
            <div>
                <small className='section-title'>Review</small>
            </div>
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>What our client say <br /> about Us</p>
                </h1>
            </div>
            <div className=''>
                <p className="text-[#6D6D6D]">
                    Our clients love the efficiency and reliability of our renewable energy solutions. They appreciate our tailored <br /> pricing, expert support, and the seamless experience provided by our UK-based customer care.
                </p>
            </div>

            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="review-card">
                        <div className="review-content">
                            <div className=''>
                                <p className="quote-mark">“</p>
                            </div>
                            <div>
                                <p className="text-black text-xl mb-5">
                                    Exceptional service and significant savings! Switching to <br /> [Company Name]s renewable energy solutions was seamless, <br /> and I have noticed a substantial decrease in my energy bills. Highly <br /> recommend.
                                </p>
                            </div>
                            <div>
                                <h3 className="">Angelo Angelo</h3>
                                <small className="">CEO, X company</small>
                            </div>
                        </div>
                        <div className="author-image">
                            <img src={authorImage1} alt="Author image" />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className="review-card">
                        <div className="review-content">
                            <div className=''>
                                <p className="quote-mark">“</p>
                            </div>
                            <div>
                                <p className="text-black text-xl mb-5">
                                    Exceptional service and significant savings! Switching to <br /> [Company Name]s renewable energy solutions was seamless, <br /> and I have noticed a substantial decrease in my energy bills. Highly <br /> recommend.
                                </p>
                            </div>
                            <div>
                                <h3 className="">Simran Rahaman</h3>
                                <small className="">PA, X company</small>
                            </div>
                        </div>
                        <div className="author-image">
                            <img src={authorImage1} alt="Author image" />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div className="review-card">
                        <div className="review-content">
                            <div className=''>
                                <p className="quote-mark">“</p>
                            </div>
                            <div>
                                <p className="text-black text-xl mb-5">
                                    Exceptional service and significant savings! Switching to <br /> [Company Name]s renewable energy solutions was seamless, <br /> and I have noticed a substantial decrease in my energy bills. Highly <br /> recommend.
                                </p>
                            </div>
                            <div>
                                <h3 className="">Rafsan Haq</h3>
                                <small className="">Manager, X company</small>
                            </div>
                        </div>
                        <div className="author-image">
                            <img src={authorImage1} alt="Author image" />
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;