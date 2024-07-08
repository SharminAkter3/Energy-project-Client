import '../../../App.css';
import missionImage from '../../../assets/Images/Mission/mission.png';
import heatIcon from '../../../assets/Images/Mission/heat.png';
import co2Icon from '../../../assets/Images/Mission/co2.png';
import foundIcon from '../../../assets/Images/Mission/found.png';


const Mission = () => {
    return (
        <div className='mission-card-container'>
            <div className='mission-card'>
                <div>
                    <img className='mission-image'
                        src={missionImage}
                        alt="mission-image"
                    />
                </div>
                <div className='mission-content'>
                    <div>
                        <small className='section-title'>Our Mission</small>
                    </div>
                    <div>
                        <h1 className='h1-text'><p className='text-black'>Driving the Future of
                            <br /> Clean Energy <br />
                            Solutions</p></h1>
                    </div>
                    <div>
                        <p className='p-text'><small className='text-[#6D6D6D]'>Understand, Solve & Evolve <br /> Powering Your World with Reliable & Sustainable Energy. <br /> Affordable, cleaner and simple renewable energy solutions from a <br />global energy partner.</small></p>
                    </div>

                    <div className='all-stats mt-20 gap-5'>
                        <div className='stat'>
                            <img className='stat-image'
                                src={heatIcon}
                                alt="stat-image"
                            />
                            <h5>7.0 MW</h5>
                            <p>7.0 MW of heat <br />pumps installed</p>
                        </div>
                        <div className='stat'>
                            <img className='stat-image'
                                src={co2Icon}
                                alt="stat-image"
                            />
                            <h5>65k tonnes</h5>
                            <p>65,000 tonnes of <br /> carbon saved</p>
                        </div>
                        <div className='stat'>
                            <img className='stat-image'
                                src={foundIcon}
                                alt="stat-image"
                            />
                            <h5>£850,000</h5>
                            <p>£850,000 of grant <br />funding raised</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Mission;
