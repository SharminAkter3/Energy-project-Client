// import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
// import { useLocation, useNavigate } from "react-router-dom";
import {  useNavigate } from "react-router-dom";
// import icons from '../../assets/Images/icons/google_icons.jpeg'
import { FaFacebook, FaGoogle } from "react-icons/fa";
import Swal from "sweetalert2";


const SocialLogin = () => {
    // const { googleSignIn , facebookSignIn } = useAuth();
    const { googleSignIn  } = useAuth();
    const navigate = useNavigate()
    // const location = useLocation();
    // let from = location.state?.from?.pathname || "/dashboard";


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                {  /*    {   const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }} 
                console.log(result.user?.password); */}
                const userInfo = {
                    firstName: result.user.displayName.split(' ')[0],
                    lastName: result.user.displayName.split(' ')[1],
                    username: result.user.displayName,
                    email: result.user.email,
                    role: 'user',
                }

                fetch(`http://localhost:5000/users`, {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            console.log('user added to the database', data)

                            Swal.fire({
                                position: 'top-start',
                                icon: 'success',
                                title: 'User created successfully.',
                                showConfirmButton: false,
                                timer: 1500
                            });
                            navigate('/');
                            // navigate('/dashboard');
                            // navigate(from, { replace: true });
                        }
                    })


                // navigate(from, { replace: true });
                // navigate('/dashboard')

            })
    }


  {/*   const handleFacebookSignIn = () => {
        facebookSignIn()
            .then(result => {
                const userInfo = {
                    firstName: result.user.displayName.split(' ')[0],
                    lastName: result.user.displayName.split(' ')[1],
                    username: result.user.displayName,
                    email: result.user.email,
                    role: 'admin',
                };

                fetch(`http://localhost:5000/users`, {
                    method: "POST",
                    headers: { 'content-type': 'application/json' },
                    body: JSON.stringify(userInfo)
                })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'top-start',
                            icon: 'success',
                            title: 'User created successfully.',
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate(from, { replace: true });
                    }
                });

                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error(error);
            });
    };
 */}


    return (
        <div className="">
            <div className="font-bold mt-3">or</div>
            <div className="">
                {/*     <button onClick={handleGoogleSignIn} className="btn w-full bg-secondary text-white">
                    <FaGoogle className="mr-2"></FaGoogle>
                    Google
                </button> */}

                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline btn-[#4CAF50] text-center mt-3">
                    { /*  <img src={icons} style={{height:'30px' , width:'30px', borderRadius:'50%'}} alt="" /> */}
                    <FaGoogle className=""></FaGoogle>
                </button>
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline btn-[#4CAF50] text-center ml-3 mt-3">
                    <FaFacebook className=""></FaFacebook>
                </button>


            </div>
        </div>
    );
};

export default SocialLogin;