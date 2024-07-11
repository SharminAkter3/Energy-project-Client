import userImage from '../../assets/Images/Expert/teamMember3.png';
import { FaEdit } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
    return (
        <div className="section-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <div>
                <div className='text-center' >
                    <img style={{ width: '280px', height: '280px', borderRadius: '50%', }}
                        src={userImage} alt='Esther Howard' />
                </div>

                <div className='mt-5 ' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', }}>
                    <h1 className='text-4xl font-bold'>John Doe</h1>
                    <button className="text-4xl text-black">
                        <FaEdit />
                    </button>
                </div>
                <div>
                    <p className='text-[#6D6D6D] mt-2'>example@company.com</p>
                </div>
            </div>

            <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5' >
                <div className='' style={{ backgroundColor: '#F3FAF3', padding: '30px', }}>
                    <div className='mt-5 mb-10 ' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', }}>
                        <h1 className='text-3xl font-bold'>Personal information</h1>
                        <button className="text-2xl text-black">
                            <FaEdit />
                        </button>
                    </div>

                    <div className='text-left'>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Name</p>
                            <h1 className='text-xl font-semibold'>John Doe</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Email address</p>
                            <h1 className='text-xl font-semibold'>example@company.com</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Phone</p>
                            <h1 className='text-xl font-semibold'>(208) 555-0112</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Address</p>
                            <h1 className='text-xl font-semibold'>2118 Thornridge Cir. Syracuse, Connecticut <br />35624</h1>
                        </div>
                    </div>
                </div>

                <div className='' style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                    <div className='mt-5 mb-10 ' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', }}>
                        <h1 className='text-3xl font-bold'>Business information</h1>
                        <button className="text-2xl text-black">
                            <FaEdit />
                        </button>
                    </div>

                    <div className='text-left'>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Business name</p>
                            <h1 className='text-xl font-semibold'>Y company</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Business email address</p>
                            <h1 className='text-xl font-semibold'>example@company.com</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Business phone</p>
                            <h1 className='text-xl font-semibold'>Not inputed yet</h1>
                        </div>
                        <div className='mb-5'>
                            <p className='text-[#6D6D6D] mt-2'>Business address</p>
                            <h1 className='text-xl font-semibold'>Not inputed yet</h1>
                        </div>
                    </div>
                </div>

                <div style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                    <div className='mt-5 mb-10 text-left'>
                        <h1 className='text-3xl font-bold'>Purchased services</h1>
                    </div>

                    <div className='text-left'>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>

                        <button className='see-button mt-5'> See More
                            <FontAwesomeIcon icon={faArrowRightLong} className='ml-3' />
                        </button>

                    </div>
                </div>


                <div style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                    <div className='mt-5 mb-10 text-left'>
                        <h1 className='text-3xl font-bold'>Purchased products</h1>
                    </div>

                    <div className='text-left'>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold'>Business electricity</h1>
                            <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                        </div>

                        <button className='see-button mt-5'> See More
                            <FontAwesomeIcon icon={faArrowRightLong} className='ml-3' />
                        </button>

                    </div>
                </div>


            </div>




            <div className='mt-40 mb-40'>
                <h1 className='text-4xl font-bold mb-8'>Billing history</h1>

                <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5' >
                    <div className='' style={{ backgroundColor: '#F3FAF3', padding: '30px', }}>
                        <div className='mt-5 mb-10 text-left'>
                            <h1 className='text-3xl font-bold'>Billing overview</h1>
                        </div>

                        <div className='text-left'>
                            <div className='mb-5'>
                                <p className='text-[#6D6D6D] mt-2'>Last purchase</p>
                                <h1 className='text-xl font-semibold'>Usd 567.89</h1>
                            </div>
                            <div className='mb-5'>
                                <p className='text-[#6D6D6D] mt-2'>Total spent</p>
                                <h1 className='text-xl font-semibold'>Usd 3457.90</h1>
                            </div>
                            <div className='mb-5'>
                                <p className='text-[#6D6D6D] mt-2'>Last time purchased</p>
                                <h1 className='text-xl font-semibold'>5 days ago</h1>
                            </div>
                            <div className='mb-5'>
                                <p className='text-[#6D6D6D] mt-2'>Total purchase</p>
                                <h1 className='text-xl font-semibold'>9</h1>
                            </div>
                        </div>
                    </div>

                    <div className='' style={{ backgroundColor: '#F3FAF3', padding: '30px' }}>
                        <div className='mt-5 mb-10 text-left'>
                            <h1 className='text-3xl font-bold'>Payment history</h1>
                        </div>

                        <div className='text-left'>
                            <div className='mb-5 grid grid-cols-2 gap-36'>
                                <div>
                                    <h1 className='text-xl font-semibold'>Heat pump</h1>
                                    <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                                </div>
                                <div className='mt-3'>
                                    <h1 className='text-xl font-semibold'>-567.89 USD</h1>
                                </div>
                            </div>
                            <div className='mb-5 grid grid-cols-2 gap-36'>
                                <div>
                                    <h1 className='text-xl font-semibold'>Heat pump</h1>
                                    <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                                </div>
                                <div className='mt-3'>
                                    <h1 className='text-xl font-semibold'>-567.89 USD</h1>
                                </div>
                            </div>
                            <div className='mb-5 grid grid-cols-2 gap-36'>
                                <div>
                                    <h1 className='text-xl font-semibold'>Heat pump</h1>
                                    <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                                </div>
                                <div className='mt-3'>
                                    <h1 className='text-xl font-semibold'>-567.89 USD</h1>
                                </div>
                            </div>
                            <div className='mb-5 grid grid-cols-2 gap-36'>
                                <div>
                                    <h1 className='text-xl font-semibold'>Heat pump</h1>
                                    <p className='text-[#6D6D6D] mt-2'>5 days ago</p>
                                </div>
                                <div className='mt-3'>
                                    <h1 className='text-xl font-semibold'>-567.89 USD</h1>
                                </div>
                            </div>

                            <button className='see-button mt-5'> See More
                                <FontAwesomeIcon icon={faArrowRightLong} className='ml-3' />
                            </button>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
};

export default Profile;