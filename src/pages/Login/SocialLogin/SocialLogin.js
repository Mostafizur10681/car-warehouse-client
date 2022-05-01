import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import google from '../../../images/google.png';
import github from '../../../images/github.png';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElements;

    if (error || error1) {
        errorElements = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }

    if (loading || loading1) {
        return <p>Loading...</p>;
    }
    if (user || user1) {
        navigate(from, { replace: true });
    }
    return (
        <div>
            {loading}
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mx-4 mt-3 text-dark'>OR</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElements}
            <div>
                <button onClick={() => signInWithGoogle()} type="button" className="btn login-button w-50 d-block mx-auto my-2 bg-success text-white">
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='ms-2'>Google SignIn</span>
                </button>
                <button onClick={() => signInWithGithub()} type="button" className="btn login-button w-50 d-block mx-auto my-2 bg-success text-white">
                    <img style={{ width: '30px' }} src={github} alt="" />
                    <span className='ms-2'>GitHub SignIn</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;