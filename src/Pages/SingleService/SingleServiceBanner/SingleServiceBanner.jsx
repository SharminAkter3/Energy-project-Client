// import singleServiceBanner from '../../../assets/Images/banner/singleService.png';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleServiceBanner = () => {
    const { id } = useParams();
    const [service, setService] = useState(null);

    useEffect(() => {
        fetch(`https://energy-project-server.vercel.app/services/${id}`)
            .then(response => response.json())
            .then(data => setService(data))
            .catch(error => console.error('Error fetching service:', error));
    }, [id]);

    if (!service) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mt-20 mx-20'>
            <div className='container p-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='grid grid-rows-[auto,auto,1fr,auto] gap-3'>
                        <div>
                            <small className='section-title'>{service.headerTitle}</small>
                        </div>
                        <div>
                            <h1 className='h1-text'><p className='text-black'>{service.titlePrefix}</p></h1>
                        </div>
                        <div>
                            <p className='p-text'><small className='text-[#6D6D6D]'>{service.titleDescription}</small></p>
                        </div>
                        <div>
                            <button className='service-button'>Request a call</button>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <img
                            src={service.ctaImage}
                            alt={service.headerTitle}
                            className='rounded-xl w-full h-auto md:w-1/2 lg:w-3/4'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceBanner;