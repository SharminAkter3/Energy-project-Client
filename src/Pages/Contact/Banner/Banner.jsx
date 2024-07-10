import contactBanner from '../../../assets/Images/banner/contact_banner.png';

const Banner = () => {
    return (
        <div className="container">
            <div>
                <small className='section-title'>Contact us</small>
            </div>
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>Let us know what you need</p>
                </h1>
            </div>
            <div>
                <p className="text-[#6D6D6D]">
                    Reach out to our team for expert assistance and personalized energy solutions. We are here to help with any questions or <br />support you need.
                </p>
            </div>

            <div className='px-10 banner-container'>
                <div className="w-full mt-10 mb-12 ">
                    <img className='aboutImage' src={contactBanner} alt="Contact-Banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;