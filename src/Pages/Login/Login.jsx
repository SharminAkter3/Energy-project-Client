import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/Images/login/login_img.jpeg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
// import axios from 'axios';

const Login = () => {

    const { signIn, resetPassword } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [emailForReset, setEmailForReset] = useState("");


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    // let from = location.state?.from?.pathname || "/dashboard";

    console.log(location)

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                Swal.fire({
                    position: 'top-start',
                    icon: 'success',
                    title: 'User loggedin successfully.',
                    showConfirmButton: false,
                    timer: 2000
                });
                navigate('/')
                // navigate('/dashboard')
                // navigate(from, { replace: true });

            })
            .catch(error => console.log(error));
    }


    const handlePasswordReset = () => {
        resetPassword(emailForReset)
            .then(() => {
                Swal.fire({
                    position: 'top-start',
                    icon: 'success',
                    title: 'Password reset email sent successfully.',
                    showConfirmButton: false,
                    timer: 2000
                });
            })
            .catch(error => console.log(error));
    };

    return (
        <div className="text-center flex flex-col justify-between gap-5 mx-10 my-10 md:mx-20 md:my-14 lg:mx-40 lg:my-20">
            <p className='mt-5 text-[#4CAF50] font-bold'>Welcome back</p>
            <h1 className='text-3xl font-bold my-5'>Stay connected with us</h1>
            <p>Access your account to manage energy usage, view bills, and explore our latest <br></br> services effortlessly.</p>



            <div className="">
                <div className="w-full mx-auto mt-10 mb-24 px-10">
                    <img src={img} alt="" />
                </div>

                <div className="">
                    <div className="mx-10">

                        <h1 className="text-3xl text-center font-bold my-10">Sign in to your old account</h1>

                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <input type="text" name='email' placeholder="Email Address" className="input input-bordered" />
                            </div>
                            <div className="form-control mt-5 relative ">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>


                            <div className='flex justify-end'>
                                <label className="label text-end">
                                    <a href="#"
                                        className="label-text-alt text-[#4CAF50]"
                                        onClick={() => {
                                            const email = prompt('Enter your email address:');
                                            if (email) {
                                                setEmailForReset(email);
                                                handlePasswordReset();
                                            }
                                        }}>
                                        Forgot password?
                                    </a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn bg-[#4CAF50] text-white" type="submit" value="Sign in" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='my-4 text-center'>Do not have an account?<Link className='text-[#4CAF50]' to="/signup">Sign Up</Link> </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Login;