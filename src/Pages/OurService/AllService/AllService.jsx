import technologyImage from '../../../assets/Images/icons/technology.png';
import solutionImage from '../../../assets/Images/icons/solution.png';
import { Link } from 'react-router-dom';

const AllService = () => {
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

            <div className='process-card-container'>
                <div className='all-stats gap-8 p-10'>
                    <div className='d-flex'>
                        <div className='stat process-card mt-5'>
                            <img className='stat-image'
                                src={technologyImage}
                                alt="stat-image"
                            />
                            <h5>Innovative Technology</h5>
                            <p>ECutting-edge renewable energy solutions designed for <br /> maximum efficiency and reliability.</p>
                            <div className='w-50'>
                                <button className='service-button'><Link to="/single_service">Get Service</Link></button>
                            </div>
                        </div>
                        <div className='stat process-card mt-5'>
                            <img className='stat-image'
                                src={solutionImage}
                                alt="stat-image"
                            />
                            <h5>Tailored Solutions</h5>
                            <p>Customized energy plans to fit your unique needs and <br /> budget, ensuring optimal value.</p>
                            <div className='w-50'>
                                <button className='service-button'><Link to="/single_service">Get Service</Link></button>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex'>
                        <div className='stat process-card mt-5'>
                            <img className='stat-image'
                                src={technologyImage}
                                alt="stat-image"
                            />
                            <h5>Innovative Technology</h5>
                            <p>ECutting-edge renewable energy solutions designed for <br /> maximum efficiency and reliability.</p>
                            <div className='w-50'>
                                <button className='service-button'>Get Service</button>
                            </div>
                        </div>
                        <div className='stat process-card mt-5'>
                            <img className='stat-image'
                                src={solutionImage}
                                alt="stat-image"
                            />
                            <h5>Tailored Solutions</h5>
                            <p>Customized energy plans to fit your unique needs and <br /> budget, ensuring optimal value.</p>
                            <div className='w-50'>
                                <button className='service-button'>Get Service</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllService;