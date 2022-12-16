import React from 'react';


const AppointmentOption = ({appointmentOption,setTreatment}) => {
    const {name,slots,price} = appointmentOption;
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl mt-2">

  <div className="card-body items-center text-center">
    <h2 className="card-title text-secondary font-bold">{name}</h2>
    <p>{   slots?.length > 0 ? slots[0] : 'Try Another Day ' }</p>
    <p>{slots?.length} {slots?.length > 1 ? 'Spaces' : 'Space'} available </p>
    <p><small>Price:$ {price}</small></p>
    <div className="card-actions">
     
     <label 
     disabled={slots?.length === 0 }
      onClick={() => setTreatment(appointmentOption)}
      htmlFor="booking-modal" 
      className="btn bg-primary border-0">Book  Appointment</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default AppointmentOption;