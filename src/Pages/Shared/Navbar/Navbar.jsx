import { Link, useNavigate } from 'react-router-dom';
import { useContext, } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate()

    { /*   const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
    <div className="relative ">
    <span onClick={toggleDropdown} className='rounded-full cursor-pointer'>
        <img style={{ height: '30px', width: '30px', borderRadius: '50%' }} src={user?.photoURL} alt="" />
    </span>
    {isDropdownOpen && (
        <div className="absolute top-10 right-0 bg-primary text-black rounded-md shadow-md">
            <ul className='list-none'>
                <li className="w-full py-2 px-4 font-bold" onClick={handleLogOut} style={{ whiteSpace: 'nowrap' }}>
                    LogOut
                </li>
            </ul>
        </div>
    )}
</div> */}

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/');
            })
            .catch(error => console.log(error));
    };

    const navMenu = <>

        {/*  <li className='text-[#4CAF50] font-bold'><Link to="/">Home</Link> </li> */}

        <li className=''><Link to="/">Home</Link> </li>
        <li>
            <details>
                <summary><Link to="/our_service">Service</Link></summary>
                {/* <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul> */}
            </details>
        </li>

        <li>
            <details>
                <summary><Link to="/our_product">Products</Link></summary>
                {/* <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul> */}
            </details>
        </li>
        <li className=''><Link to="/guides">Guids</Link> </li>
        <li className=''><Link to="/about">About Us</Link> </li>
        <li className=''><Link to="/contact">Contact Us</Link> </li>
        <li className=''><Link to="/dashboard">Dashboard</Link> </li>

        {/* {user?.email ? } */}
    </>


    return (
        <div className="navbar  bg-white">

            <div className="navbar-start  bg-white">

                <div className="dropdown  bg-white">

                    <div className="flex flex-row justify-end mr-3">
                        <button className="btn btn-ghost drawer-button lg:hidden">
                            <FaBars />
                        </button>
                    </div>


                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white  rounded w-52">
                        {navMenu}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}


                <Link to='/'>
                    <div className='flex justify-center items-center sm:ml-5'>
                        <h1 className='text-2xl font-bold'> Logo</h1>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex mx-10">
                <ul className="menu menu-horizontal px-1">
                    {navMenu}
                </ul>
            </div>

            <div className="navbar-end">
                {user?.email ? <>

                    <button className="btn btn-sm  bg-[#4CAF50]"><Link to="/profile">Profile</Link></button>
                    <button onClick={handleLogOut} className="btn btn-sm mx-2 bg-[#4CAF50]">LogOut</button>

                </>
                    : <button className="btn btn-sm mx-5 bg-[#4CAF50]"><Link to="/login">Sign In</Link></button>
                }

            </div>
        </div>
    );
};

export default Navbar;
