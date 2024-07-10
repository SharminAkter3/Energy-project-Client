import ourProductBanner from '../../../assets/Images/banner/our_product_banner.gif';

const OurProductBanner = () => {
    return (
        <div className='banner'>
            <div>
                <h3 className='h3-text'>Energy solution</h3>
                <h1 className='h1-text'>Our
                    <b className="text-black"> Innovative</b> <br /> Energy
                    <b className="text-black"> Solutions</b></h1>
                <p className='p-text'>
                    Empowering Your Journey to Sustainability with Advanced, <br /> Reliable, and Efficient Energy Solutions Tailored to Meet Your <br /> Unique Needs.
                </p>
            </div>
            <div className='image-container'>
                <img
                    src={ourProductBanner}
                    alt="Banner-Illustration"
                    style={{ maxWidth: '100%' }}
                />
            </div>
        </div>
    );
};

export default OurProductBanner;