import informationLogo from '../../../assets/Images/Process/inpormation.png';
import searchLogo from '../../../assets/Images/Process/search.png';
import statisticsLogo from '../../../assets/Images/Process/stat.png';

const ServiceProcess = () => {
    return (
        <div className='my-48'>
            <div className="section-container">
                <div>
                    <h1 className='h1-text'>
                        <p className='text-black'>How it works?</p>
                    </h1>
                </div>
                <div>
                    <p className="text-[#6D6D6D]">Find commercial and consumer energy solutions in three simple steps.</p>
                </div>

                <div className='process-card-container'>
                    <div className='all-stats gap-8 p-10'>
                        <div className='stat process-card'>
                            <img className='stat-image'
                                src={informationLogo}
                                alt="stat-image"
                            />
                            <h5>Compare electricity <br />providers</h5>
                            <p>Once you’ve filled in your business  address and postcode, you’ll be able to compare a wide variety of  electricity deals from our trusted partners. Take your time to go through each electricity broker to find the one that benefits you most.</p>
                        </div>
                        <div className='stat process-card'>
                            <img className='stat-image'
                                src={searchLogo}
                                alt="stat-image"
                            />
                            <h5>Make an informed <br /> decision</h5>
                            <p>Our experts will talk through the available options with you, offering key insights and recommending a deal that is suited to your needs and saves you money. We can discuss your options in depth with you and make sure you’re 100% happy with your decision.</p>
                        </div>
                        <div className='stat process-card'>
                            <img className='stat-image'
                                src={statisticsLogo}
                                alt="stat-image"
                            />
                            <h5>Switch and save</h5>
                            <p>Ensuring to make the process as streamlined as possible, we handle the switch to your new provider so you can sit back and enjoy your new business electricity deal.</p>
                        </div>
                    </div>
                </div>


                <div className='text-left mx-48 mt-40'>
                    <h1 className='h1-text mb-5'>
                        <p className='text-black'>How to reduce business electricity costs?</p>
                    </h1>
                    <div className='mb-5'>
                        <p className="text-[#6D6D6D]">Reducing electricity costs in your business can not only save you money but also lead to increased efficiency <br /> and eco-conscious practices. To do this, you should focus on key strategies such as:</p>
                    </div>

                    <div className='ml-10 mb-5'>
                        <input type="radio" /> Comparing and switching to more cost-effective electricity suppliers
                        <br />
                        <input type="radio" /> Negotiating better contract terms
                        <br />
                        <input type="radio" /> Implementing energy-efficient practices, such as using LED lighting
                        <br />
                        <input type="radio" /> Installing energy management systems such as smart meters to monitor usage
                        <br />
                        <input type="radio" /> Carrying out regular maintenance
                        <br />
                        <input type="radio" /> Upgrading to more efficient equipment
                        <br />
                        <input type="radio" /> Exploring renewable energy options
                        <br />
                        <input type="radio" /> Engaging employees in energy-saving practices
                        <br />
                        <input type="radio" /> Participating in demand response programs
                    </div>


                    <p className="text-[#6D6D6D]">Taking advantage of government incentives for energy efficiency.</p>

                    <button className='service-button mt-5'>Start saving today</button>
                </div>
            </div >
        </div >
    );
};

export default ServiceProcess;