import React from 'react';
import treatment from '../../../assets/images/treatment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const DentalCare = () => {
    return (
        <div className="">
           <div className="mx-auto my-16 ">
        <div className="items-center  justify-evenly   lg:flex ">
        <div className="">
                <img style={{height:'500px'}} className=" shadow-2xl shadow-slate-400 rounded-lg lg:max-w-2xl" src={treatment} alt="Catalogue-pana.svg"/>
            </div>
            <div className=" ml-5  ">
                <div className="lg:max-w-lg">
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl">Exceptional Dental Care, on Your Terms</h1>
                    
                    <p className="mt-6 text-gray-600  dark:text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of </p>
                    
        
                   <PrimaryButton>Get Started</PrimaryButton>
          
               
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default DentalCare;