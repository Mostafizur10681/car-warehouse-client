import React, { useRef } from 'react';
import { Button, Form, Toast, ToastContainer } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';
import login from '../../../images/login.png';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    let location = useLocation();
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);


    if (user) {
        navigate(from, { replace: true });
    }

    const handleOnSubmitLogin = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }

    let errorElements;

    if (error) {
        errorElements = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>
    }
    const handleRegister = event => {
        navigate('/register')
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        console.log(email);
        if (email) {
            await sendPasswordResetEmail(email);
            Toast('Sent email');
        }
        else {
            Toast('Please enter your email address');
        }
    }
    return (
        <div className=' my-5 py-3 px-5'>
            <h1 className='pt-2 text-center text-success'>Please Login</h1>
            <div className='row my-5'>
                <div className='col-12 col-sm-12 col-md-5 col-lg-5'>
                    <img width="400" height="450" src={login} alt="" />
                </div>
                <div className='col-12 col-sm-12 col-md-7 col-lg-7 p-3 login-container bg-light border rounded-3'>
                    <Form className=' mt-3' onSubmit={handleOnSubmitLogin}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept Terms & Condition" />
                        </Form.Group>
                        {errorElements}
                        <Button variant="primary" type="submit" className='mb-2 bg-success login-button w-50 mx-auto d-block'>
                            Login
                        </Button>
                        <p className='text-dark'>New in Car Warehouse? <Link style={{ textDecoration: 'none' }} to='/register' onClick={handleRegister}>Please Register</Link></p>
                        <p className='text-dark'>Forget Password?<button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
                        <SocialLogin></SocialLogin>
                        <ToastContainer></ToastContainer>
                    </Form>
                </div>
            </div>

        </div>
    );
};

export default Login;