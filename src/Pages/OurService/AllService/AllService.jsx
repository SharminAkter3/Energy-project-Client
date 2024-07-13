// import technologyImage from '../../../assets/Images/icons/technology.png';
import solutionImage from '../../../assets/Images/icons/solution.png';
// import heatIcon from '../../../assets/Images/Mission/heat.png';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AllService = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    };

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
                <p className="text-[#6D6D6D]">We provide top-tier renewable energy solutions tailored to your needs. From solar panel installations and <br /> wind energy systems to efficient energy storage and smart grid technology, our services ensure <br /> sustainability and savings. Partner with us for expert consultation, seamless implementation, and ongoing <br /> support. Power your future with our innovative energy solutions.</p>
            </div>

            <div className='service-card-container'>
                <div className='mt-20 gap-5 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    {services.map(service => (
                        <div key={service._id} className='stat shadow-lg rounded-lg'>
                            <img className='w-1/6 h-auto object-cover rounded-lg py-5'
                                src={service.ctaImage || solutionImage}
                                alt={service.headerTitle}
                                style={{ borderRadius: '80%' }}
                            />
                            <h1 className='text-left text-2xl font-bold my-3'>{service.titlePrefix}</h1>
                            {/* <p className='text-gray-700 mb-5'>{service.titleDescription}</p> */}
                            <p className='text-left text-gray-700 mb-3'>
                                {truncateDescription(service.titleDescription, 20)}
                            </p>

                            <button className='service-button w-1/2 bg-blue-500 text-white py-2 px-2 rounded'>
                                <Link to={`/single_service/${service._id}`}>Get Service</Link>
                            </button>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
};

export default AllService;