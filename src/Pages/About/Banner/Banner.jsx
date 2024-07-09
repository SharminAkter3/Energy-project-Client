import aboutImage from '../../../assets/Images/banner/about.png';

const Banner = () => {
    return (
        <div className="container">
            <div>
                <small className='section-title'>Who we are?</small>
            </div>
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>About us</p>
                </h1>
            </div>
            <div>
                <p className="text-[#6D6D6D]">
                    Creating a sense of community and purpose around sustainability.
                </p>
            </div>

            <div className='px-10 banner-container'>
                <div className="w-full mt-10 mb-12 ">
                    <img className='aboutImage' src={aboutImage} alt="aboutImage" />
                </div>
                <div>
                    <p className='text-left'>Energy Solutions (ES) LTD started in 2016 with one goal in mind: providing our customers with an exemplary energy comparison service that  is far more than just the basics. Year after year, we continue to offer our business customers the easiest, most cost-effective ways to manage their energy; as well as the easiest possible way to switch. Whether you’re considering one of Big Five or you’re looking for something a little different, we’re equipped to help you make that positive change. Since our opening, we’ve helped hundreds of customers get more value when it comes to their energy. There aren’t many businesses out there that can say that. Our happy customers and  excellent switching deals are proof that we’re everything we say we are. Try us out today to discover a new standard of service from small businesses to large-scale multinational firms.</p>
                </div>
            </div>

        </div>
    );
};

export default Banner;