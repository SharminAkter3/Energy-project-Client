import '../../../App.css';
import bannerImage from '../../../assets/Images/banner/home_banner.gif';
import brandLogo from '../../../assets/Images/banner/brand-logo.png';


const Banner = () => {
    const brandLogoContainerStyles = {
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'background-color': '#F3FAF3',
        'padding': '20px',
    };

    const brandLogoStyle = {
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center',
        'background-color': '#F3FAF3',
        'width': '1120px',
        'height': '80px',
        'gap': '10px',
    };

    return (
        <div>
            <div className='banner'>
                <div>
                    <h3 className='h3-text'>Understand, Solve & Evolve</h3>
                    <h1 className='h1-text'>Powering Your World <br />
                        with <small className="text-black">Reliable</small> & <br />
                        <small className="text-black">Sustainable</small> Energy.</h1>
                    <p className='p-text'>
                        Affordable, cleaner and simple renewable energy solutions from a global energy partner.
                    </p>
                    <button className='button'>Request a quote</button>
                </div>
                <div className='image-container'>
                    <img
                        src={bannerImage}
                        alt="Banner-Illustration"
                        style={{ maxWidth: '100%' }}
                    />
                </div>
            </div>
            <div style={brandLogoContainerStyles}>
                <img style={brandLogoStyle} src={brandLogo} alt="Brand-logo" />
            </div>
        </div >
    );
};

export default Banner;