import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <div>
            <section className=""
             style={{
                background:`url(${appointment})`
             }}
            >
            <div className="items-center mt-24 mb-24 justify-evenly   lg:flex ">
        <div className="">
                <img style={{height:'500px'}} className=" lg:max-w-2xl -mt-24 hidden lg:block " src={doctor} alt="Catalogue-pana.svg"/>
            </div>
            <div className=" ml-5  ">
                <div className="lg:max-w-lg text-white py-6">
                    <small className='text-lg text-primary'>Appointment</small>
                    <h1 className="text-2xl  text-white lg:text-3xl font-semibold">Make an appointment Today</h1>
                    
                    <p className="mt-6 ">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    
        
                   <PrimaryButton>Getting Started </PrimaryButton>
          
               
                </div>
            </div>
        </div>
</section>
        </div>
    );
};

export default MakeAppointment;