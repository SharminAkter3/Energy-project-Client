import singleServiceBanner from '../../../assets/Images/banner/singleService.png';

const SingleServiceBanner = () => {
    return (
        <div>
            <div className='mx-40 mt-20'>
                <div className='flex gap-20'>
                    <div className='' style={{ display: "flex", flexDirection: 'column', alignContent: 'space-between' }}>
                        <div className='mb-5'>
                            <small className='section-title'>Service</small>
                        </div>
                        <div>
                            <h1 className='h1-text'><p className='text-black'>Your Business <br />Electricity Broker</p></h1>
                        </div>
                        <div>
                            <p className='p-text'><small className='text-[#6D6D6D]'>When running a business, having good quality business gas and <br /> electricity is key. Here at Energy Solutions, we are committed to <br /> helping you find the best business energy deal which is not only <br /> efficient but also keeps your costs down. We are experts in <br /> supporting small businesses in finding a deal that is tailored to their <br /> unique needs and requirements. With us, comparing and switching<br />  business energy brokers is easy. Take your first step towards<br />  cheaper, greener, more efficient electricity today.</small>
                            </p>
                        </div>
                        <div className='mt-40'>
                            <button className='service-button'>Find best service</button>
                        </div>
                    </div>

                    <div>
                        <img className='' style={{ width: '544px', height: '492px', borderRadius: '20px' }}
                            src={singleServiceBanner}
                            alt="mission-image"
                        />
                    </div>

                </div>
            </div >
        </div>
    );
};

export default SingleServiceBanner;