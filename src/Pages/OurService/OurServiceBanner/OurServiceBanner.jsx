import ourServiceBanner from '../../../assets/Images/banner/our_service_banner.gif';

const OurServiceBanner = () => {
    return (
        <div className='banner'>
            <div>
                <h3 className='h3-text'>We provide best service</h3>
                <h1 className='h1-text'>Empowering Your <br />
                    <small className="text-black">Energy</small> Choices for a <br />
                    <small className="text-black">Sustainable</small> Future.</h1>
                <p className='p-text'>
                    Creating a sense of community and purpose around <br />sustainability.
                </p>
            </div>
            <div className='image-container'>
                <img
                    src={ourServiceBanner}
                    alt="Banner-Illustration"
                    style={{ maxWidth: '100%' }}
                />
            </div>
        </div>
    );
};
export default OurServiceBanner;