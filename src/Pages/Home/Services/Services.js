import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import Service from './Service';
const Services = () => {

 
    const serviceData = [

         { id:1,
            name:'Fluoride Treatment',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: fluoride,
           },
         { id:2,
            name:'Cavity Filling',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: cavity,
           },
         { id:3,
            name:'Teeth Whitening',
            description:'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            icon: whitening,
           },
    ]


    return (
        <div>
            <div className="mt-16 text-center">
                <h3 className='text-primary uppercase text-xl font-semibold'>Our Services</h3>
                <h2 className='text-3xl my-2'>Services We Provide</h2>

            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6">
           {
             serviceData.map(service => <Service
             key={service.id}
             service={service}
             ></Service>)
           } 
            </div>
        </div>
    );
};

export default Services;