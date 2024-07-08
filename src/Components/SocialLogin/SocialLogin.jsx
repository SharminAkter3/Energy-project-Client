// import { FaGoogle } from "react-icons/fa";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
// import icons from '../../assets/Images/icons/google_icons.jpeg'
import { FaFacebook, FaGoogle } from "react-icons/fa";





const SocialLogin = () => {
    const { googleSignIn } = useAuth();
    const navigate = useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/dashboard";


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                {  /*    {   const userInfo = {
                email: result.user?.email,
                name: result.user?.displayName
            }} 
            console.log(result.user?.password); */}
                navigate(from, { replace: true });
                // navigate('/dashboard')

            })
    }

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