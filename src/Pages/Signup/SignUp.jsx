import { Link, useNavigate } from 'react-router-dom';
import img from '../../assets/Images/login/signup_img.jpeg'
import { useContext, useState } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {

    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);
    const [error, setError] = useState('');

    const togglePasswordVisibility1 = () => {
        setShowPassword1(!showPassword1);
    }; 

    const togglePasswordVisibility2 = () => {
        setShowPassword2(!showPassword2);
    };


    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const username = firstName + " " + lastName;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        const role = 'admin';
        console.log({ username, email, password,confirmPassword, role });

        if( password !== confirmPassword ) return setError('Password does not match')

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log('created user', user)

                updateUserProfile(username)
                    .then(() => {
                        // create user entry in the database
                        /*    const userInfo = {
                               name: name,
                               email: email
                           }
                           */
                        fetch(`https://edu-plus-server.onrender.com/accounts/register/`, {
                            method: "POST",
                            headers: { 'content-type': 'application/json' },
                            body: JSON.stringify({ username, email, password, role })
                        })
                            .then(res => res.json())
                            .then(data => console.log(data))

                        /*      .then(res => {
                                 if (res.data.insertedId) {
                                     console.log('user added to the database')
                                     Swal.fire({
                                         position: 'top-end',
                                         icon: 'success',
                                         title: 'User created successfully.',
                                         showConfirmButton: false,
                                         timer: 1500
                                     });
                                     navigate('/');
                                 }
                             }) */


                        Swal.fire({
                            position: 'top-start',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/dashboard');


                    })
                    .catch(error => console.log(error))
            })

    }

    return (
        <div className=" min-h-screen  text-center">

            <p className='mt-5 text-[#4CAF50] font-bold'>Welcome</p>
            <h1 className='text-3xl font-bold my-5'>Stay connected with us</h1>
            <p>Access your account to manage energy usage, view bills, and explore our latest <br></br> services effortlessly.</p>


            <div className=" ">

                <div className="w-full mx-auto mt-10 mb-24 px-10">
                    <img src={img} alt="" />
                </div>


                <div className="">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold my-10">Sign up a new account</h1>
                        <form onSubmit={handleSignUp}>

                            <div className="form-control mt-5">

                                <input type="text" name='firstName' placeholder="First Name" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-5">
                            
                                <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered" />
                            </div>

                            <div className="form-control mt-5">
                              
                                <input type="text" name='email' placeholder="Email address" className="input input-bordered" />
                            </div>
                            
                            <div className="form-control mt-5 relative">
                                <input
                                    type={showPassword1 ? "text" : "password"}
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility1}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                                >
                                    {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>

                            <div className="form-control mt-5 relative">
                            <input
                                type={showPassword2 ? "text" : "password"}
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                className="input input-bordered"
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility2}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2"
                            >
                                {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                            {error}

                            
                            <div className="form-control mt-6">
                                <input className="btn bg-[#4CAF50] text-white" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className='my-4 text-center'>Already Have An Account? <Link className='text-[#4CAF50]' to="/login">Sign In</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;