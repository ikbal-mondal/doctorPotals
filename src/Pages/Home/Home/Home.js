import React from 'react';
import Banner from '../Banner/Banner';
import ContactFrom from '../ContactFrom/ContactFrom';
import DentalCare from '../DentalCare/DentalCare';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactFrom></ContactFrom>
        </div>
    );
};

export default Home;