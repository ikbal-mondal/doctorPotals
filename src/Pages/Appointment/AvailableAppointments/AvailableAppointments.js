import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect } from 'react';
import { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
   
    const [treatment,setTreatment] = useState(null)
     const date = format(selectedDate, 'PP')
   const {data: appointmentsOptions = [], refetch,isLoading} = useQuery({
    queryKey:['appointmentOption',date],
    queryFn: async() => {
    const res = await fetch(`https://doctors-portal-server-b1sdo6rmh-ikbal-mondal.vercel.app/v2/appointmentOptions?date=${date}`);
        const data = await res.json();
        return data
    }
    
   })
   if(isLoading){
    return <Loading></Loading>
   }

    return (
        <section>
            <p className='text-center text-secondary font-bold'>Available Appointments On {format(selectedDate , 'PP')}</p>


              <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-6 my-16 mb-24 ">

               {

              appointmentsOptions.map( appointmentOption => <AppointmentOption
              key={appointmentOption._id}
              appointmentOption={appointmentOption}
              setTreatment={setTreatment}
            
              ></AppointmentOption>)

               }

              </div>
 
          {  treatment && 
           <BookingModal
             treatment={treatment}
             selectedDate={selectedDate}
             setTreatment={setTreatment}
             refetch={refetch}
             >
             </BookingModal>}
        </section>
    );
};

export default AvailableAppointments;