import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { SiGithub } from "react-icons/si";
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase.init';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }

    if (user || user1) {
        navigate(from, { replace: true });
    }

    return (
        <div className='mt-5'>


            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='rounded-pill bg-blue-500 text-white w-50 py-3 justify-center mx-auto my-2 flex items-center'>
                    <FcGoogle className='text-2xl' ></FcGoogle>

                    <span >Google Sign In</span>
                </button>

                <button
                    onClick={() => signInWithGithub()}
                    className='rounded-pill bg-black text-white w-50 py-3 justify-center mx-auto my-2 flex items-center'>
                    <SiGithub></SiGithub>
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
            {errorElement}
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-gray-500 w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-gray-500 w-50'></div>
            </div>
        </div >
    );
};

export default SocialLogin;