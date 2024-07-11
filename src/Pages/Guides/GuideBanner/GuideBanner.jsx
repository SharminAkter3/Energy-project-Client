import guideBanner from '../../../assets/Images/banner/guide_banner.gif';

const GuideBanner = () => {
    return (
        <div className='banner'>
            <div>
                <h3 className='h3-text'>Blog & Guide</h3>
                <h1 className='h1-text'>Expert
                    <b className="text-black"> Insights</b> & <br />
                    <b className="text-black"> Practical </b>Tips</h1>
                <p className='p-text'>
                    Stay Informed with the Latest Trends, Tips, and Expert Advice on <br /> Renewable Energy Solutions.
                </p>
            </div>
            <div className='image-container'>
                <img
                    src={guideBanner}
                    alt="Banner-Illustration"
                    style={{ maxWidth: '100%' }}
                />
            </div>
        </div>
    );
};

export default GuideBanner;