import singleServiceBanner from '../../../assets/Images/banner/singleService.png';

const SingleProductBanner = () => {
    return (
        <div>
            <div className='mx-40 mt-20'>
                <div className='flex-style gap-20'>
                    <div className='' style={{ display: "flex", flexDirection: 'column', alignContent: 'space-between' }}>
                        <div className='mb-5'>
                            <small className='section-title'>Product</small>
                        </div>
                        <div>
                            <h1 className='h1-text'><p className='text-black'>Solar Photovoltaic <br /> (Solar PV)</p></h1>
                        </div>
                        <div>
                            <p className='p-text'><small className='text-[#6D6D6D]'>Solar PV is an established, well developed, and sustainable <br /> technology that harnesses sunlight and converts it into electricity <br />  via solar panels. A very versatile technology, the application of solar  <br /> ranges from large grid scale ground mounted arrays, providing  <br /> bespoke power solutions for businesses, to small roof mounted <br />  domestic installation providing renewable power to our homes. <br />
                                Power generated can be used on site, stored for later use,  <br /> combined with complimentary technologies such as heat pumps or <br />  electric car charging points, or exported to the grid (subject to a <br />  suitable connection).</small>
                            </p>
                        </div>
                        <div className='mt-48'>
                            <button className='service-button'>Request a call</button>
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

export default SingleProductBanner;