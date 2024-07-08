import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';
import chatIcon from '../../../assets/Images/dashboard/chat_8214728.png'
import user1 from '../../../assets/Images/dashboard/user-image-1.png'

const Services = () => {
    return (
        <div className="grid bg-[#F5F5F5] p-5 gap-3 grid-cols-3">

        {/* side bar one */}

            <div className="bg-[#FEFEFE] p-5 mr-5 col-span-2">
                <h1>Details</h1>
                <div className='text-center'>
                    <div className='w-full flex justify-center mb-2'><img style={{ height: '100px', width: '100px', color: 'white', borderRadius: '50%' }} src={chatIcon} alt="" /></div>

                    <h1 className='text-2xl font-bold'>Business gas</h1>
                    <p>Cutting-edge renewable energy solutions designed for maximum efficiency and reliability.</p>
                    <div className='w-full flex justify-center mt-4'>

                        <button className="btn btn-circle  bg-black text-white">
                            <FaEdit />
                        </button>
                        <button className="btn btn-circle bg-black text-white mx-3">
                            <FaTrash />
                        </button>

                    </div>
                </div>



                <div className='mt-4'>
                    <h1 className='text-2xl font-bold'>Details</h1>
                    <p><span className='text-[#64748B] font-bold'>  Total sell</span> : USD 10,222.45</p>
                    <p><span className='text-[#64748B] font-bold'>Pending order  </span> : 5</p>
                    <p><span className='text-[#64748B] font-bold'>Delivered order  </span>: 130</p>
                    <p><span className='text-[#64748B] font-bold'>Service details </span> : Lorem ipsum dolor sit amet consectetur. Commodo semper velit aliquet sit est iaculis pellentesque mattis. Duis est dui et sagittis faucibus vel elit. Morbi aliquam nullam vitae gravida. Vulputate lectus lorem ultrices urna ipsum eget.</p>
                </div>


                <div className='mt-4'>
                    <h1 className='text-2xl font-bold'>Header</h1>
                    <p><span className='text-[#64748B] font-bold'>Prefix of title</span> : Service</p>

                    <p><span className='text-[#64748B] font-bold'> Title</span>  : Your Business Electricity Broker</p>

                    <p><span className='text-[#64748B] font-bold'>Description </span>     While we offer some one-size-fits-all solutions, we also recognise that no two businesses are the same. As such, our electricity plans are fully adjustable to suit you.Our fixed-rate plan offers budget certainty, while our flexible arrangement enables you to modify your pricing according to your changing energy needs.</p>

                    <p><span className='text-[#64748B] font-bold'>Service details </span> : Lorem ipsum dolor sit amet consectetur. Commodo semper velit aliquet sit est iaculis pellentesque mattis. Duis est dui et sagittis faucibus vel elit. Morbi aliquam nullam vitae gravida. Vulputate lectus lorem ultrices urna ipsum eget.</p>
                    <p><span className='text-[#64748B] font-bold'>CTA </span> : Find best services</p>

                    <p><span className='text-[#64748B] font-bold'>  Image  </span> : Image</p>

                </div>

                <div className='mt-4'>
                    <h1 className='text-2xl font-bold'>1st section</h1>
                    <p><span className='text-[#64748B] font-bold'>Prefix of title</span> : -</p>

                    <p><span className='text-[#64748B] font-bold'> Title </span>: Why our services are best?</p>

                    <p><span className='text-[#64748B] font-bold'>Description </span>: When running a business, having good quality business gas and electricity is key. Here at Energy Solutions, we are committed to helping you find the best business energy deal which is not only efficient but also keeps your costs down. We are experts in supporting small businesses in finding a deal that is tailored to their unique needs and requirements. With us, comparing and switching business energy brokers is easy. Take your first step towards cheaper, greener, more efficient electricity today. </p>
                    <p><span className='text-[#64748B] font-bold'>CTA </span> : - </p>

                    <p><span className='text-[#64748B] font-bold'>  Image  </span> : Image</p>

                </div>



                Image :

                <div className='mt-4'>
                    <p><span className='text-[#64748B] font-bold'>Sub title</span>: Customized plans</p>

                    <p><span className='text-[#64748B] font-bold'>Sub title description</span>: When running a business, having good quality business gas and electricity is key. Here at Energy Solutions, we are committed to helping you find the best business energy deal which is not only efficient but also keeps your costs down. We are experts in supporting small businesses in finding a deal that is tailored to their unique needs and requirements. With us, comparing and switching business energy brokers is easy. Take your first step towards cheaper, greener, more efficient electricity today.</p>

                    <p><span className='text-[#64748B] font-bold'>CTA </span> : - </p>

                    <p><span className='text-[#64748B] font-bold'>  Image  </span> : Image</p>

                </div>




            </div>

            {/* side bar two */}

            <div className="bg-[#FEFEFE] p-5 col-span-1">
                <h1>Servics</h1>
                <div>

                    <div className='grid grid-cols-3 gap-5 mt-5 items-center'>
                        <div className='flex justify-center'>
                            <img className="circular-img" style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={user1} alt="" />
                        </div>
                        <div className='col-span-2 flex items-center'>
                            <p className='text-xl font-bold'>Business electricity</p>
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-5 mt-5 items-center'>
                        <div className='flex justify-center'>
                            <img className="circular-img" style={{ height: '50px', width: '50px', color: 'white', borderRadius: '50%' }} src={user1} alt="" />
                        </div>
                        <div className='col-span-2 flex items-center'>
                            <p className='text-xl font-bold'>Business electricity</p>
                        </div>
                    </div>



                    <div className='bg-[#E8EFFF] text-center p-5 my-4'>

                        <button className="btn btn-circle bg-black text-white mx-3">
                            <FaPlus></FaPlus>
                        </button>
                        <p>Add Service</p>

                    </div>





                </div>
            </div>

        </div>
    );
};

export default Services;