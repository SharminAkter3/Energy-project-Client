// import chatIcon from '../../../assets/Images/dashboard/chat_8214728.png'
import user1 from '../../../assets/Images/dashboard/user-image-1.png'

const User = () => {
    return (
        <div className="grid bg-[#F5F5F5] p-5 gap-3 grid-cols-3">

        {/* side bar one */}

            <div className="bg-[#FEFEFE] p-5 mr-5 col-span-2">
                <h1>User Profile</h1>
                <div className='text-center'>
                    <div className='w-full flex justify-center mb-2'><img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Jane Cooper</h1>
                    <p>www.jane23@gmail.com</p>
                </div>

                <div>
                    <h1 className='text-2xl font-bold'>Pending order</h1>
                    <p>No pending order</p>
                </div>

                <div className='grid grid-cols-3 gap-5 mt-5'>
                    <div className='bg-[#E8EFFF] p-3 rounded'>
                        <span>Last visit</span>
                        <h1 className='text-xl font-bold'>2 hours ago</h1>
                    </div>
                    <div className='bg-[#E8EFFF] p-3 rounded'>
                        <span>Last purchase</span>
                        <h1 className='text-xl font-bold'>Heat pump</h1>
                    </div>
                    <div className='bg-[#E8EFFF] p-3 rounded'>
                        <span>Total spend</span>
                        <h1 className='text-xl font-bold'>USD 5600.45</h1>
                    </div>
                </div>

                <div className='mt-4'>
                    <h1 className='text-2xl font-bold'>Details</h1>
                    <p><span className='text-[#64748B] font-bold'>Contact number </span>: (208) 555-0112</p>
                    <p><span className='text-[#64748B] font-bold'>Address  </span>: 1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                    <p><span className='text-[#64748B] font-bold'>Business Name  </span>: Y company</p>
                    <p><span className='text-[#64748B] font-bold'>Business Address  </span>: Did not input yet</p>
                    <p><span className='text-[#64748B] font-bold'>Business email  </span>: Did not input yet</p>
                    <p><span className='text-[#64748B] font-bold'>Business phone  </span>: Did not input yet</p>
                </div>
                <div>
                    <h1 className='text-2xl font-bold'> Purchase list  </h1>
                    <div className='grid grid-cols-3 gap-5 mt-5 items-center justify-center'>
                        <div><img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                        <div>
                            <h1>Heat pump</h1>
                            <p>Products</p>
                        </div>
                        <div>
                            <h1>USD 345.23</h1>
                        </div>
                    </div>
                </div>


            </div>

            {/* side bar two */}

            <div className="bg-[#FEFEFE] p-5 col-span-1">
                <h1>User</h1>
                <div>

                    <div className='grid grid-cols-3 gap-5 mt-5 items-center justify-center'>
                        <div><img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                        <div>
                            <h1>Heat pump</h1>
                            <p>Products</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-5 mt-5 items-center justify-center'>
                        <div><img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                        <div>
                            <h1>Heat pump</h1>
                            <p>Products</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-5 mt-5 items-center justify-center'>
                        <div><img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                        <div>
                            <h1>Heat pump</h1>
                            <p>Products</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    );
};

export default User;