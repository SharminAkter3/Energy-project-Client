import { Link } from "react-router-dom";

const MoreProduct = () => {
    return (
        <div className="section-container">
            <div className="mb-12">
                <h1 className='h1-text'>
                    <p className='text-black'>Explore more products</p>
                </h1>
            </div>

            <div className='card-container mb-20'>
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
                            <button className="button"><Link to="/single_product">Learn More</Link></button>
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
                            <button className="button"><Link to="/single_product">Learn More</Link></button>
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
                            <button className="button"><Link to="/single_product">Learn More</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoreProduct;