import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import register from '../../../images/register.png'
import './Register.css'

const Register = () => {
    const nameRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const navigate = useNavigate();

    const handleUseNavigateRegister = () => {
        navigate('/login')
    }

    if (user) {
        navigate('/home')
    }


    const handleOnSubmitRegister = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        // console.log(email, password)
        createUserWithEmailAndPassword(email, password)
        console.log(name, email, password)
    }
    return (
        <div className=' my-5  px-5'>
            <h1 className='pt-2 text-center login-header text-success'>Please Register</h1>
            <div className='row my-5 '>
                <div className='col-12 col-sm-12 col-md-5 col-lg-5'>
                    <img width="400" height="400" src={register} alt="" srcset="" />
                </div>
                <div className='col-12 col-sm-12 col-md-7 col-lg-7 bg-light p-3 ,t-3 login-container bg-light border rounded-3'>
                    <Form onSubmit={handleOnSubmitRegister}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={nameRef} type="name" placeholder="Enter Your Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control ref={emailRef} type="email" placeholder="Enter Your email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control ref={passwordRef} type="password" placeholder="Enter Password" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Accept Terms & Condition" />
                        </Form.Group>
                        {error}
                        <Button variant="success" type="submit" className='mb-2 login-button w-50 mx-auto d-block'>
                            Register
                        </Button>
                        <p className='text-dark'>Already have an Account? <Link style={{ textDecoration: 'none' }} to='/login' onClick={handleUseNavigateRegister}>Please Login</Link></p>
                        <SocialLogin></SocialLogin>

                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Register;