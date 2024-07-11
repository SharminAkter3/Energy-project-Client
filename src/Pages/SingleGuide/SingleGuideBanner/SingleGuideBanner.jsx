import singleServiceBanner from '../../../assets/Images/banner/singleService.png';

const SingleGuideBanner = () => {
    return (
        <div>
            <div className='mx-40 mt-20'>
                <div className='flex-style gap-20'>
                    <div className='mb-20' style={{ display: "flex", flexDirection: 'column', alignContent: 'space-between' }}>
                        <div className='mb-5'>
                            <small className='section-title'>Blog</small>
                        </div>
                        <div>
                            <h1 className='h1-text'><p className='text-black'>How to calculate <br /> energy usage?</p></h1>
                        </div>
                        <div className='mt-5 font-bold'>
                            <h1>By Admin Es / June 6, 2024</h1>
                        </div>
                        <div>
                            <p className='p-text'><small className='text-[#6D6D6D]'>Many people find that energy costs are one of their biggest bills, <br /> whether that’s for domestic energy needs or a commercial venture. <br /> Knowing how much energy you’re using is the first step towards <br />making a change to achieve lower bills in the future- but how can <br /> you find out how much energy you use? </small>
                            </p>
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

export default SingleGuideBanner;