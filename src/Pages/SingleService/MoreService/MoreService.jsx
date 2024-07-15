import { Link } from 'react-router-dom';
import heatIcon from '../../../assets/Images/Mission/heat.png';
import { useEffect, useState } from 'react';

const MoreService = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://energy-project-server.vercel.app/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    return (
        <div className="section-container my-40">
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>Explore more <br /> service</p>
                </h1>
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
        </div>
    );
};

export default MoreService;