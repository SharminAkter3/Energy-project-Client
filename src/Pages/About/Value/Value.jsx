import '../../../App.css';
import technologyImage from '../../../assets/Images/icons/technology.png';
import solutionImage from '../../../assets/Images/icons/solution.png';
import sustainabilityImage from '../../../assets/Images/icons/sustainability.png';
import supportImage from '../../../assets/Images/icons/support.png';

const Value = () => {
    return (
        <div className="section-container">
            <div>
                <small className='section-title'>Our Core Value</small>
            </div>
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>What make us best?</p>
                </h1>
            </div>
            <div>
                <p className="text-[#6D6D6D]">Innovative technology, tailored solutions, and exceptional customer service. Trusted <br />for efficiency, reliability, and sustainability.</p>
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
                        </div>
                        <div className='stat process-card mt-5'>
                            <img className='stat-image'
                                src={solutionImage}
                                alt="stat-image"
                            />
                            <h5>Tailored Solutions</h5>
                            <p>Customized energy plans to fit your unique needs and <br /> budget, ensuring optimal value.</p>
                        </div>
                    </div>
                    <div className='d-flex '>
                        <div className='stat process-card mt-5'>
                            <img className='stat-image'
                                src={sustainabilityImage}
                                alt="stat-image"
                            />
                            <h5>Certified Sustainability</h5>
                            <p> UK-certified renewable certificates guaranteeing genuine <br />green energy sources. </p>
                        </div>

                        <div className='stat process-card mt-5'>
                            <img className='stat-image'
                                src={supportImage}
                                alt="stat-image"
                            />
                            <h5>Exceptional Support</h5>
                            <p>Dedicated UK-based customer care providing seamless <br /> service and expert assistance.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Value;