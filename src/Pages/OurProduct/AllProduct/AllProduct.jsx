
const AllProduct = () => {
    return (
        <div className="section-container">
            <div>
                <small className='section-title'>Our Products</small>
            </div>
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>Discover Our Best Solutions <br /> for You</p>
                </h1>
            </div>
            <div>
                <p className="text-[#6D6D6D]">Discover our cutting-edge energy solutions designed for efficiency and sustainability. From advanced solar panels to <br />innovative wind turbines and energy storage systems, [Company Name] offers reliable products to power a greener future. <br /> Lower costs, reduce your carbon footprint, and embrace energy independence with our state-of-the-art technology.<br /> Explore our range and start your journey towards sustainable energy today.</p>
            </div>


            <div className='card-container'>
                <div className="card w-96 shadow-xl no-rounded bg-[#4CAF50]">
                    <figure className="no-rounded">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                            className="no-rounded card-image-style" />
                    </figure>
                    <div className="card-body-style items-center text-center no-rounded">
                        <h2 className="card-title-style">Shoes!</h2>
                        <p className='card-description'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="mb-3">
                            <button className="button">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl no-rounded bg-[#4CAF50]">
                    <figure className="no-rounded">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                            className="no-rounded card-image-style" />
                    </figure>
                    <div className="card-body-style items-center text-center no-rounded">
                        <h2 className="card-title-style">Shoes!</h2>
                        <p className='card-description'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="mb-3">
                            <button className="button">Learn More</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 shadow-xl no-rounded bg-[#4CAF50]">
                    <figure className="no-rounded">
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                            alt="Shoes"
                            className="no-rounded card-image-style" />
                    </figure>
                    <div className="card-body-style items-center text-center no-rounded">
                        <h2 className="card-title-style">Shoes!</h2>
                        <p className='card-description'>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="mb-3">
                            <button className="button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;