import '../../../App.css';
import FacebookIcon from '../../../assets/Images/icons/facebook.png';
import LinkedInIcon from '../../../assets/Images/icons/linkedIn.png';
import XIcon from '../../../assets/Images/icons/x.png';
import InstragramIcon from '../../../assets/Images/icons/instragram.png';

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="newsletter-section">
                <div>
                    <h2 className="newsletter-title">Subscribe for our <span className="highlight">newsletter</span></h2>
                    <p className="newsletter-subtitle">Stay up-to-date by getting our new blogs</p>
                </div>
                <div className="newsletter-input-container">
                    <input type="email" placeholder="Enter e-mail" className="newsletter-input" />
                    <button className="newsletter-button">Subscribe</button>
                </div>
            </div>
            <div className="footer-content">
                <div className="footer-logo">
                    <h3>Logo</h3>
                    <div className="social-icons">
                        <div className="icon">
                            <img className=''
                                src={FacebookIcon}
                                alt="facebook-icon"
                            />
                        </div>
                        <div className="icon">
                            <img className=''
                                src={LinkedInIcon}
                                alt="linkedIn-icon"
                            />
                        </div>
                        <div className="icon">
                            <img className=''
                                src={XIcon}
                                alt="x-icon"
                            />
                        </div>
                        <div className="icon">
                            <img className=''
                                src={InstragramIcon}
                                alt="instragram-icon"
                            />
                        </div>
                    </div>
                </div>
                <div className="footer-links">
                    <div className="footer-column">
                        <h3>Products</h3>
                        <ul>
                            <li>Heat pumps</li>
                            <li>Solar</li>
                            <li>Gas engine</li>
                            <li>Asset controls</li>
                            <li>Energy storage</li>
                            <li>Hydrogen</li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Contacts</h3>
                        <p>8859 Birch Road, North <br /> Paytoncester 73622</p>
                        <p>tim.jennings@example.com</p>
                        <p>(230) 833-7709</p>
                    </div>
                    <div className="footer-column">
                        <h3>Links</h3>
                        <ul>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>Careers</li>
                            <li>FAQs</li>
                            <li>Manage cookies</li>
                            <li>Privacy policy</li>
                            <li>Terms & conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2024 X company. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;