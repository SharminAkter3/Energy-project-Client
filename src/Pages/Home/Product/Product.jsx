import '../../../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Product = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const truncateDescription = (description, wordLimit) => {
        const words = description.split(' ');
        return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : description;
    };

    return (
        <div className="section-container">
            <div>
                <small className='section-title'>Our Products</small>
            </div>
            <div>
                <h1 className='h1-text'>
                    <p className='text-black'>Discover Our Best Solutions <br />for You</p>
                </h1>
            </div>
            <div>
                <p className="text-[#6D6D6D]">
                    Discover our cutting-edge energy solutions designed for efficiency and sustainability. From advanced solar panels to <br /> innovative wind turbines and energy storage systems, [Company Name] offers reliable products to power a greener future. <br /> Lower costs, reduce your carbon footprint, and embrace energy independence with our state-of-the-art technology. <br /> Explore our range and start your journey towards sustainable energy today.
                </p>
            </div>

            <div className='flex justify-center items-center'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-5'>
                    {products.slice(0, 3).map(product => (
                        <div key={product._id} className="card w-96 shadow-xl no-rounded bg-[#4CAF50]">
                            <figure className="no-rounded">
                                <img
                                    src={product.ctaImage}
                                    alt={product.headerTitle}
                                    className="no-rounded card-image-style" />
                            </figure>
                            <div className="card-body-style items-center text-center no-rounded">
                                <h2 className="card-title-style">{product.titlePrefix}</h2>
                                {/* <p className='card-description'>{product.titleDescription}</p> */}
                                <p className='card-description'>
                                    {truncateDescription(product.titleDescription, 15)}
                                </p>
                                <div className="mb-3">
                                    <button className="button">
                                        <Link to={`/single_product/${product._id}`}>Learn More</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className='see-button'><Link to='/our_product'>See More
                <FontAwesomeIcon icon={faArrowRightLong} className='ml-3' /></Link>
            </button>
        </div >
    );
};

export default Product;