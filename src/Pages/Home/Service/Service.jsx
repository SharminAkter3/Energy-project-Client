import '../../../App.css';
import heatIcon from '../../../assets/Images/Mission/heat.png';

const Service = () => {
    return (
        <div className="container">
            <div>
                <small className='section-title'>Our Service</small>
            </div>
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>Get a Free Energy <br /> Assessment</p>
                </h1>
            </div>
            <div>
                <p>
                    We provide top-tier renewable energy solutions tailored to your needs. From solar panel installations and <br /> wind energy systems to efficient energy storage and smart grid technology, our services ensure <br />sustainability and savings. Partner with us for expert consultation, seamless implementation, and ongoing <br />support. Power your future with our innovative energy solutions.
                </p>
            </div>

            <div className='service-card-container'>
                <div className='all-stats mt-20 gap-5'>
                    <div className='stat'>
                        <img className='stat-image'
                            src={heatIcon}
                            alt="stat-image"
                        />
                        <p className='card-title'>service name</p>
                        <button className='service-button'>Get Service</button>
                    </div>
                    <div className='stat'>
                        <img className='stat-image'
                            src={heatIcon}
                            alt="stat-image"
                        />
                        <p className='card-title'>service name</p>
                        <button className='service-button'>Get Service</button>
                    </div>
                    <div className='stat'>
                        <img className='stat-image'
                            src={heatIcon}
                            alt="stat-image"
                        />
                        <p className='card-title'>service name</p>
                        <button className='service-button'>Get Service</button>
                    </div>
                    <div className='stat'>
                        <img className='stat-image'
                            src={heatIcon}
                            alt="stat-image"
                        />
                        <p className='card-title'>service name</p>
                        <button className='service-button'>Get Service</button>
                    </div>
                </div>
            </div>
            <button className='see-button'>See more</button>
        </div>

    )
};

export default Service;