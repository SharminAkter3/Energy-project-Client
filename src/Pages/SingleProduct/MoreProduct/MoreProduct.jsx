import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';

const MoreProduct = () => {

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
            <div className="mb-12">
                <h1 className='h1-text'>
                    <p className='text-black'>Explore more products</p>
                </h1>
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

        </div>
    );
};

export default MoreProduct;