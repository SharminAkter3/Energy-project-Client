import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => console.log(error));
    };

    const [services, setServices] = useState([]);
    const [products, setProducts] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServices(data))
            .catch(error => console.error('Error fetching services:', error));
    }, []);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    const handleLinkClick = () => {
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const navMenu = (
        <>
            <li>
                <Link
                    to="/"
                    className={location.pathname === '/' ? 'active-nav-link' : ''}
                    onClick={handleLinkClick}
                >
                    Home
                </Link>
            </li>
            <li>
                <details>
                    <summary>
                        <Link
                            to="/our_service"
                            className={location.pathname === '/our_service' ? 'active-nav-link' : ''}
                            onClick={handleLinkClick}
                        >
                            Service
                        </Link>
                    </summary>
                    <ul className="p-2">
                        {services.map(service => (
                            <li key={service._id}>
                                <a>{service.titlePrefix}</a>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>
                        <Link
                            to="/our_product"
                            className={location.pathname === '/our_product' ? 'active-nav-link' : ''}
                            onClick={handleLinkClick}
                        >
                            Products
                        </Link>
                    </summary>
                    <ul className="p-2">
                        {products.map(product => (
                            <li key={product._id}>
                                <a>{product.headerTitle}</a>
                            </li>
                        ))}
                    </ul>
                </details>
            </li>
            <li>
                <Link
                    to="/guides"
                    className={location.pathname === '/guides' ? 'active-nav-link' : ''}
                    onClick={handleLinkClick}
                >
                    Guides
                </Link>
            </li>
            <li>
                <Link
                    to="/about"
                    className={location.pathname === '/about' ? 'active-nav-link' : ''}
                    onClick={handleLinkClick}
                >
                    About Us
                </Link>
            </li>
            <li>
                <Link
                    to="/contact"
                    className={location.pathname === '/contact' ? 'active-nav-link' : ''}
                    onClick={handleLinkClick}
                >
                    Contact Us
                </Link>
            </li>
            <li>
                <Link
                    to="/dashboard"
                    className={location.pathname === '/dashboard' ? 'active-nav-link' : ''}
                    onClick={handleLinkClick}
                >
                    Dashboard
                </Link>
            </li>
        </>
    );

    return (
        <div className="navbar bg-white">
            <div className="navbar-start bg-white">
                <div className="dropdown bg-white">
                    <div className="flex flex-row justify-end mr-3">
                        <button className="btn btn-ghost drawer-button lg:hidden" onClick={toggleDropdown}>
                            <FaBars />
                        </button>
                    </div>
                    {isDropdownOpen && (
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded w-52">
                            {navMenu}
                        </ul>
                    )}
                </div>
                <Link to='/'>
                    <div className='flex justify-center items-center sm:ml-5'>
                        <h1 className='text-2xl font-bold'>Logo</h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex mx-10">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.email ? (
                    <>
                        <button className="btn btn-sm bg-[#4CAF50]"><Link to="/profile">Profile</Link></button>
                        <button onClick={handleLogOut} className="btn btn-sm mx-2 bg-[#4CAF50]">LogOut</button>
                    </>
                ) : (
                    <button className="btn btn-sm mx-5 bg-[#4CAF50]"><Link to="/login">Sign In</Link></button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
