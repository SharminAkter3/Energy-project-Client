import '../../../App.css';
import expertImage from '../../../assets/Images/Expert/expert1.png';

const Expert = () => {
    return (
        <div className=''>
            <div className="expert-says-container">
                <div className="text-container">
                    <div>
                        <h2>
                            What our <span className="highlight">expert</span> says
                        </h2>
                    </div>
                    <div>
                        <p className="quote-mark">“</p>
                    </div>
                    <div>
                        <p className="description">We are transforming energy with cutting-edge solar panels, wind turbines, and storage systems. Our mission is to create a sustainable, greener future. Join us in reducing carbon footprints and embracing renewable energy. Thank you for supporting a cleaner planet.
                        </p>
                    </div>
                </div>
                <div className="image-container">
                    <img src={expertImage} alt="Expert" className="expert-image" />
                </div>
            </div>
        </div>
    );
};

export default Expert;