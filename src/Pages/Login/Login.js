import React, { useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BiRightArrowCircle } from "react-icons/bi";
import { BiLogInCircle } from "react-icons/bi";
import { Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../Components/Loading/Loading';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin';
import useToken from '../../Hooks/useToken';

const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorElement;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    const [token] = useToken(user);
    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || sending) {
        return <Loading></Loading>
    }

    if (token) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message}</p>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)

        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className='container w-50 mx-auto shadow-lg p-3 my-5 bg-body rounded responsive '>
            <div className='d-flex justify-content-between'><button className='mx-auto border-end w-50 text-success  transition ease-in-out delay-300 hover:-translate-y-1 hover:underline hover:underline-offset-4'>LOGIN</button>
                <button className='mx-auto border-start w-50 text-success  transition ease-in-out delay-300 hover:-translate-y-1 hover:underline hover:underline-offset-4' onClick={navigateRegister}>REGISTER</button></div>
            <SocialLogin></SocialLogin>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="EMAIL" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="PASSWORD" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <button className='bg-primary py-2 px-5 rounded flex items-center mx-auto text-white'>
                    LOGIN   <BiLogInCircle></BiLogInCircle>

                </button>
            </Form>
            {errorElement}
            <p className='mt-3'>New To My Place? <Link
                to="/register" className='text-success pe-auto text-decoration-none fw-bold' onClick={navigateRegister}>Jump To The Register<BiRightArrowCircle></BiRightArrowCircle></Link></p>
            <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>



        </div>
    );
};

export default Login;