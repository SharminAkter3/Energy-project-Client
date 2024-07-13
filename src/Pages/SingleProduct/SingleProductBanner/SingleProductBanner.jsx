import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProductBanner = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
            .catch(error => console.error('Error fetching product:', error));
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className='mt-20 mx-20'>
            <div className='container mx-auto p-5'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                    <div className='grid grid-rows-[auto,auto,1fr,auto] gap-3'>
                        <div className='mb-5'>
                            <small className='section-title'>{product.headerTitle}</small>
                        </div>
                        <div>
                            <h1 className='h1-text'><p className='text-black'>{product.titlePrefix}</p></h1>
                        </div>
                        <div>
                            <p className='p-text'><small className='text-[#6D6D6D]'>{product.titleDescription}</small></p>
                        </div>
                        <div className='mt-10'>
                            <button className='service-button'>Request a call</button>
                        </div>
                    </div>

                    <div className='flex justify-center'>
                        <img
                            src={product.ctaImage}
                            alt={product.headerTitle}
                            className='rounded-xl w-full h-auto md:w-1/2 lg:w-3/4'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProductBanner;