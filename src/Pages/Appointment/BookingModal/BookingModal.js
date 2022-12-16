import { format } from 'date-fns';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Form } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider';

const BookingModal = ({treatment,selectedDate,setTreatment,refetch}) => {
  const {name: treatmentName,slots,price} = treatment; // treatment is appointment options jus different name
  const date = format(selectedDate, 'PP')
 const {user} = useContext(AuthContext)
 const handleBooking = (event) => {
   event.preventDefault()
   const from = event.target;
   const slot = from.slot.value;
   const name = from.name.value;
   const email = from.email.value;
   const phone = from.phone.value;
   
   
   const booking ={
    appointmentDate: date,
    treatment:treatmentName,
    patient:name,
     slot,
     email,
     phone,
     price

 }
 // Todo: send data to the server 
 // and once data in save the close the modal 
 // and display success toast 
 fetch('https://doctors-portal-server-b1sdo6rmh-ikbal-mondal.vercel.app/bookings',{
    method:'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(booking)
   
 })
 .then(res => res.json())
    .then(data => {
      console.log(data);
    if(data.acknowledged){
      setTreatment(null)
      toast.success('Booking Confirmed')
      refetch()
    }
    else{
      toast.error(data.message)
    }
    })

 }
    return (
        <section>
           <input type="checkbox" id="booking-modal" className="modal-toggle"  />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <h3 className="text-lg font-bold">{treatmentName}</h3>
    <Form  onSubmit={handleBooking} className="container my-2  w-full max-w-xl p-8 mx-auto space-y-6   ">
         
        <div>
			<input readOnly value={date} disabled className="block w-full bg-gray-200 p-2 " />
		</div>
		<div>
        <select name='slot' className="select select-primary  w-full ">
             <option>Select time</option>
              {
                slots.map((slot,i) =>  
                <option value={slot}
                key={i}
                >{slot}
                </option>)
              }
            </select>
		</div>
		<div>
			<input name='name' type="text" disabled  defaultValue={user?.displayName} placeholder="Full Name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" />
		</div>
		
		<div>
			<input name='email'  type="text"  placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" defaultValue={user?.email} disabled />
		</div>
		<div>
			<input name='phone' type="text" placeholder="Phone Number" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800 border-2" />
		</div>
		
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-white bg-gradient-to-r from-primary to-secondary border-0 uppercase">Submit</button>
		</div>
	</Form>
  </div>
</div>
        </section>
    );
};

export default BookingModal;