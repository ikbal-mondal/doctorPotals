import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
// import { useNavigation } from 'react-day-picker';
import { useLoaderData } from 'react-router-dom';
// import Loading from '../../Shared/Loading/Loading';
import ChenkoutFrom from './ChenkoutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
const Payment = () => {
   const booking = useLoaderData()
//    const navigation = useNavigation()
   const {treatment,price,appointmentDate,slot} = booking;
//  if(navigation.state === "loading"){
//     return <Loading></Loading>
//  }
    return (
        <div>
            <h1 className='text-3xl'>Payment for {treatment} </h1>
            <p className='text-xl'> Please pay <strong>${price}</strong> for your appointment on {appointmentDate} at {slot}</p>
            <div className="w-96 my-16">
            <Elements stripe={stripePromise}>
      <ChenkoutFrom 
      booking={booking}
      />
    </Elements>
            </div>
        </div>
    );
};

export default Payment;