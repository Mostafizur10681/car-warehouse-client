import React from 'react';
import notFound from '../../../src/images/notFound.png'

const NotFound = () => {
    return (
        <div>
            <h2 className='mt-5 text-danger'>This is not avaliabe which are you looking for!!</h2>
            <img className='img-fluid' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;