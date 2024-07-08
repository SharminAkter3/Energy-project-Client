import user1 from '../../../assets/Images/dashboard/user-image-1.png'

const Invoice = () => {
    return (
        <div className="grid bg-[#F5F5F5] p-5 gap-3 grid-cols-3">

            {/* side bar one */}

            <div className="bg-[#FEFEFE] p-5 mr-5 col-span-2">
                <h1>Forms</h1>
                <div className='text-center'>
                    <div className='w-full flex justify-center mb-2'><img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                    <h1 className='text-2xl font-bold'>Jane Cooper</h1>
                    <p>www.jane23@gmail.com</p>
                </div>

                <div className='mt-4'>
                    <h1 className='text-2xl font-bold'>Forms Details</h1>
                    <p><span className='text-[#64748B] font-bold'>Contact number </span>: (208) 555-0112</p>
                    <p><span className='text-[#64748B] font-bold'>Address  </span>: 1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
                    <p><span className='text-[#64748B] font-bold'>Business Name  </span>: Y company</p>
                    <p><span className='text-[#64748B] font-bold'>Business Address  </span>: Did not input yet</p>
                    <p><span className='text-[#64748B] font-bold'>Business email  </span>: Did not input yet</p>
                    <p><span className='text-[#64748B] font-bold'>Business phone  </span>: Did not input yet</p>
                    <p><span className='text-[#64748B] font-bold'>Preferred time  </span>: Did not input yet</p>
                    <p><span className='text-[#64748B] font-bold'>Description  </span>: Lorem ipsum dolor sit amet consectetur. Commodo semper velit aliquet sit est iaculis pellentesque mattis. Duis est dui et sagittis faucibus vel elit. Morbi aliquam nullam vitae gravida. Vulputate lectus lorem ultrices urna ipsum eget.</p>
                </div>
                <div className='w-full flex justify-center mt-4'>

                    <button className="btn btn-outline">
                        Reply through call
                    </button>
                    <button className="btn  bg-black text-white mx-3">
                        Reply through mail
                    </button>

                </div>


            </div>

            {/* side bar two */}

            <div className="bg-[#FEFEFE] p-5 col-span-1">
                <h1>User</h1>
                <div>

                    <div className='grid grid-cols-3 gap-5 mt-5 items-center justify-center'>
                        <div><img style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                        <div>
                            <h1>Heat pump</h1>
                            <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 mt-5 items-center justify-center'>
                        <div><img style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                        <div>
                            <h1>Heat pump</h1>
                            <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 mt-5 items-center justify-center'>
                        <div><img style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                        <div>
                            <h1>Heat pump</h1>
                            <p>2 hours ago</p>
                        </div>
                    </div>
                    <div className='grid grid-cols-3 gap-5 mt-5 items-center justify-center'>
                        <div><img style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={user1} alt="" /></div>
                        <div>
                            <h1>Heat pump</h1>
                            <p>2 hours ago</p>
                        </div>
                    </div>



                </div>
            </div>

        </div>

    );
};

export default Invoice;