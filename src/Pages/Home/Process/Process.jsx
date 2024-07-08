import '../../../App.css';
import informationLogo from '../../../assets/Images/Process/inpormation.png';
import searchLogo from '../../../assets/Images/Process/search.png';
import statisticsLogo from '../../../assets/Images/Process/stat.png';

const Process = () => {
    return (
        <div className="container">
            <div>
                <small className='section-title'>Our Process</small>
            </div>
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>How it works?</p>
                </h1>
            </div>
            <div>
                <p className=''>Find commercial and consumer energy solutions in three simple steps.</p>
            </div>

            <div className='process-card-container'>
                <div className='all-stats gap-8 p-10'>
                    <div className='stat process-card'>
                        <img className='stat-image'
                            src={informationLogo}
                            alt="stat-image"
                        />
                        <h5>Compare energy providers</h5>
                        <p>Explore a wide array of options from our trusted partners, ensuring you are well-informed on each energy provider and ready to choose the deal that benefits you most</p>
                    </div>
                    <div className='stat process-card'>
                        <img className='stat-image'
                            src={searchLogo}
                            alt="stat-image"
                        />
                        <h5>Find the right deal</h5>
                        <p>Decide with confidence. Rely on our insights and expertise to guide you toward the optimal pick tailored to your specific needs.</p>
                    </div>
                    <div className='stat process-card'>
                        <img className='stat-image'
                            src={statisticsLogo}
                            alt="stat-image"
                        />
                        <h5>Switch and save</h5>
                        <p>Switch to your new energy provider and enjoy energy-efficient gas and electricity. Save money and enjoy the benefits of greener, higher quality energy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Process;