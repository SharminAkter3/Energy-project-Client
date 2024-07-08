import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeMenuItem, setActiveMenuItem] = useState('');
    const navigate = useNavigate();

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => console.log(error));
    };

    const handleMenuItemClick = (item) => {
        setActiveMenuItem(item);
    };

    const navMenu = (
        <>
            <li style={{ color: activeMenuItem === 'Home' ? '#4CAF50' : 'inherit', fontWeight: activeMenuItem === 'Home' ? 'bold' : 'normal' }}>
                <Link to="/" onClick={() => handleMenuItemClick('Home')}>Home</Link>
            </li>
            <li>
                <details>
                    <summary>Service</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <li>
                <details>
                    <summary>Products</summary>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </details>
            </li>
            <li style={{ color: activeMenuItem === 'Guids' ? '#4CAF50' : 'inherit', fontWeight: activeMenuItem === 'Guids' ? 'bold' : 'normal' }}>
                <Link to="/" onClick={() => handleMenuItemClick('Guids')}>Guids</Link>
            </li>
            <li style={{ color: activeMenuItem === 'About Us' ? '#4CAF50' : 'inherit', fontWeight: activeMenuItem === 'About Us' ? 'bold' : 'normal' }}>
                <Link to="/" onClick={() => handleMenuItemClick('About Us')}>About Us</Link>
            </li>
            <li style={{ color: activeMenuItem === 'Contact Us' ? '#4CAF50' : 'inherit', fontWeight: activeMenuItem === 'Contact Us' ? 'bold' : 'normal' }}>
                <Link to="/" onClick={() => handleMenuItemClick('Contact Us')}>Contact Us</Link>
            </li>

            {user?.email ? (
                <>
                    {/* User-specific menu items */}
                </>
            ) : (
                <>
                    {/* Guest-specific menu items */}
                </>
            )}
        </>
    );

    return (
        <div className="navbar bg-white">
            <div className="navbar-start bg-white">
                <div className="dropdown bg-white">
                    <div className="flex flex-row justify-end mr-3">
                        <button onClick={toggleDropdown} className="btn btn-ghost drawer-button lg:hidden">
                            <FaBars />
                        </button>
                    </div>
                    {isDropdownOpen && (
                        <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded w-52">
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
            <div className="navbar-end mr-10">
                {user?.email ? (
                    <div className="relative">
                        <span onClick={toggleDropdown} className='rounded-full cursor-pointer'>
                            <img style={{ height: '30px', width: '30px', borderRadius: '50%' }} src={user?.photoURL} alt="" />
                        </span>
                        {isDropdownOpen && (
                            <div className="absolute top-10 right-0 bg-primary text-black rounded-md shadow-md">
                                <ul className='list-none'>
                                    <li className="w-full py-2 px-4 font-bold" onClick={handleLogOut} style={{ whiteSpace: 'nowrap' }}>
                                        Log out
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                ) : (
                    <button className="btn btn-sm mx-5" style={{ backgroundColor: '#4CAF50' }}>
                        <Link to="/login" style={{ color: 'white' }}>Sign In</Link>
                    </button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
