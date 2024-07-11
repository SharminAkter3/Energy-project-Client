import statisticsLogo from '../../../assets/Images/Process/stat.png';
import technologyImage from '../../../assets/Images/icons/technology.png';
import co2Icon from '../../../assets/Images/Mission/co2.png';
import photo1 from '../../../assets/Images/banner/photo1.png';
import photo2 from '../../../assets/Images/banner/photo2.png';
import photo3 from '../../../assets/Images/banner/photo3.png';

const EnergyStat = () => {
    return (
        <div className='my-52'>
            <div>
                <div className="section-container">
                    <div>
                        <h1 className='h1-text'>
                            <p className='text-black'>Energy Stats</p>
                        </h1>
                    </div>
                    <div>
                        <p className="text-[#6D6D6D]">Solar PV provides a sustainable, long-term solution to improving resilience on site, providing cheaper power <br /> and reducing carbon dioxide emissions. Direct capital investment or funded solutions are standard in the <br /> current market.</p>
                    </div>

                    <div className='process-card-container'>
                        <div className='all-stats gap-8 p-10'>
                            <div className='stat process-card mt-5'>
                                <img className='stat-image'
                                    src={statisticsLogo}
                                    alt="stat-image"
                                />
                                <h5>Finance</h5>
                                <p>Lower energy costs and improved <br /> resilience.</p>
                                <div className='w-50'>
                                    <button className='service-button'>Learn more</button>
                                </div>
                            </div>
                            <div className='stat process-card mt-5'>
                                <img className='stat-image'
                                    src={co2Icon}
                                    alt="stat-image"
                                />
                                <h5>Carbon Footprint</h5>
                                <p>Sustainable power with lower <br /> carbon footprint.</p>
                                <div className='w-50'>
                                    <button className='service-button'>Learn more</button>
                                </div>
                            </div>
                            <div className='stat process-card mt-5'>
                                <img className='stat-image'
                                    src={technologyImage}
                                    alt="stat-image"
                                />
                                <h5>Complexity</h5>
                                <p>Simple, effective technology for diverse <br /> applications.</p>
                                <div className='w-50'>
                                    <button className='service-button'>Learn more</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <div className="section-container">
                    <div className='my-14'>
                        <h1 className='h1-text'>
                            <p className='text-black'>More photos</p>
                        </h1>
                    </div>
                    <div className='mx-40' style={{ display: "flex", flexDirection: 'row', alignContent: 'space-between', justifyContent: 'center', gap: '3%' }}>
                        <div>
                            <img className=''
                                style={{ width: '352px', height: '352px', borderRadius: '20px' }}
                                src={photo1}
                                alt="stat-image"
                            />
                        </div>
                        <div>
                            <img className=''
                                style={{ width: '352px', height: '352px', borderRadius: '20px' }}
                                src={photo2}
                                alt="stat-image"
                            />
                        </div>
                        <div>
                            <img className=''
                                style={{ width: '352px', height: '352px', borderRadius: '20px' }}
                                src={photo3}
                                alt="stat-image"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnergyStat;