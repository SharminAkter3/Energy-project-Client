import '../../../App.css';
import choseImage1 from '../../../assets/Images/login/signup_img.jpeg';
import choseImage2 from '../../../assets/Images/Process/choseImage2.png';
import choseImage3 from '../../../assets/Images/Process/choseImage3.png';


const Chose = () => {
    return (
        <div className='section-container'>
            <div>
                <small className='section-title'>Why Chose Us?</small>
            </div>
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>Your Partner in Smart <br /> Energy Solutions</p>
                </h1>
            </div>
            <div className="text-[#6D6D6D]">
                <p className=''>Understand, Solve & Evolve <br />Powering Your World with Reliable & Sustainable Energy. <br />Affordable, cleaner and simple renewable energy solutions from a global energy partner.</p>
            </div>

            <div className='chose-card-container'>
                <div className='chose-card'>
                    <div>
                        <img className='chose-image'
                            src={choseImage1}
                            alt="chose-image"
                        />
                    </div>
                    <div className='chose-content'>
                        <h1 className='h1-text'>Renewable Energy</h1>
                        <p className='p-text'>Our renewable energy options are designed to be <br />100% sustainable, offering you a choice of advanced <br /> renewable energy technologies and strategic <br />locations. Each option is supported by UK-certified <br />renewable certificates, ensuring that your energy <br /> comes from verified green sources.</p>
                    </div>
                </div>

                <div className='chose-card'>
                    <div className='chose-content'>
                        <h1 className='h1-text'>Affordability</h1>
                        <p className='p-text'>We offer tailored pricing plans to fit your specific <br /> energy needs and budget. Benefit from our extensive <br /> expertise in energy efficiency to maximize your <br /> savings. Additionally, leverage the purchasing <br />strength of Shell to receive unparalleled value in your <br /> energy solutions.</p>
                    </div>
                    <div>
                        <img className='chose-image'
                            src={choseImage2}
                            alt="chose-image"
                        />
                    </div>
                </div>

                <div className='chose-card'>
                    <div>
                        <img className='chose-image'
                            src={choseImage3}
                            alt="chose-image"
                        />
                    </div>
                    <div className='chose-content'>
                        <h1 className='h1-text'>Simplicity</h1>
                        <p className='p-text'>Experience hassle-free service with our UK-based <br />customer care team, dedicated to providing prompt <br />and efficient support. Manage your energy usage <br /> effortlessly through our online customer portal, which <br /> offers flexible options for both fixed and variable <br /> pricing plans, giving you control and peace of mind.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Chose;