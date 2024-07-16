import '../../../App.css';
import heatIcon from '../../../assets/Images/Mission/heat.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <div className="section-container">
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
                <div className='mt-20 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    {services.slice(0, 4).map(service => (
                        <div key={service._id} className='stat bg-white shadow-lg rounded-lg'>
                            <img className='w-1/3 h-auto object-cover rounded-lg'
                                src={service.ctaImage || heatIcon}
                                alt={service.headerTitle}
                                style={{ borderRadius: '80%' }}
                            />
                            <h1 className='text-left text-2xl font-semibold mt-2'>{service.titlePrefix}</h1>
                            {/* <p className='text-gray-700 mb-5'>{service.titleDescription}</p> */}
                            <button className='service-button bg-blue-500 text-white py-2 px-4 rounded'>
                                <Link to={`/single_service/${service._id}`}>Get Service</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <button className='see-button'><Link to='/our_service'>See More
                <FontAwesomeIcon icon={faArrowRightLong} className='ml-3' /></Link>
            </button>

        </div>

    )
};

export default Service;