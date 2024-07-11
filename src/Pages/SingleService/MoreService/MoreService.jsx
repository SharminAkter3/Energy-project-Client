import { Link } from 'react-router-dom';
import heatIcon from '../../../assets/Images/Mission/heat.png';

const MoreService = () => {
    return (
        <div className="container my-40">
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>Explore more <br /> service</p>
                </h1>
            </div>

            <div className='service-card-container text-left'>
                <div className='all-stats mt-20 gap-5 text-left'>
                    <div className='stat'>
                        <img className='stat-image'
                            src={heatIcon}
                            alt="stat-image"
                        />
                        <p className='card-title-style'>service name</p>
                        <button className='service-button'><Link to="/single_service">Get Service</Link></button>
                    </div>
                    <div className='stat'>
                        <img className='stat-image'
                            src={heatIcon}
                            alt="stat-image"
                        />
                        <p className='card-title-style'>service name</p>
                        <button className='service-button'><Link to="/single_service">Get Service</Link></button>
                    </div>
                    <div className='stat'>
                        <img className='stat-image'
                            src={heatIcon}
                            alt="stat-image"
                        />
                        <p className='card-title-style'>service name</p>
                        <button className='service-button'><Link to="/single_service">Get Service</Link></button>
                    </div>
                    <div className='stat'>
                        <img className='stat-image'
                            src={heatIcon}
                            alt="stat-image"
                        />
                        <p className='card-title-style'>service name</p>
                        <button className='service-button'>Get Service</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreService;