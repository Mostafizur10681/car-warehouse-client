import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import Banner from './Banner/Banner';
import Inventories from './Inventories/Inventories';
import Reviews from './Reviews/Reviews';
import Services from './Services/Services';


const Home = () => {
    // const [loading] = useAuthState(auth);
    // if (loading) {
    //     return <Loading></Loading>
    // }
    return (
        <div>
            {/* {loading} */}
            <Banner></Banner>
            <Inventories></Inventories>
            <Services></Services>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;