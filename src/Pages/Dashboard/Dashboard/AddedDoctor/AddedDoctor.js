import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';


const AddedDoctor = () => {
    const {register,handleSubmit,formState:{errors}} = useForm();
    const imageHostKey  = process.env.REACT_APP_imgbb_key;
   const navigate = useNavigate()
  
    const {data: specialties, isLoading } = useQuery({
        queryKey: ['specialty'],
        queryFn: async() => {
          const res = await  fetch('https://doctors-portal-server-b1sdo6rmh-ikbal-mondal.vercel.app/appointmentSpecialty')
          const data = await res.json();
          return data;
        }
    })
    const handleAddDoctor = data => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image); 
      const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`
      fetch(url, {
        method: 'POST',
        body: formData
       
      })
      .then(res => res.json())
      .then(imgData => {
        if(imgData.success){
         console.log( imgData.data.url);
         const doctor = {
          name: data.name,
          email: data.email,
          specialty: data.specialty,
          image: imgData.data.url
         }
         // save doctor information to the database
         fetch('https://doctors-portal-server-b1sdo6rmh-ikbal-mondal.vercel.app/doctors', {
          method: 'POST',
          headers:{
            'content-type': 'application/json',
            authorization: `bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(doctor)
         })
          .then(res => res.json()) 
          .then(result => {
            console.log(result);
            toast.success(`${data.name} is added successfully`);
            navigate('/dashboard/managedoctors')
          })
        }
      })
    }
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-4xl font-semibold'>Add A Doctor</h2>
            <form onSubmit={handleSubmit(handleAddDoctor)}  className=
           'w-full max-w-sm p-6 m-auto mx-auto bg-white rounded-md shadow-md border-2 '>
            
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                          {...register("name",{
                            required:'Name is required'
                          })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="email"
                           {...register("email", {
                            required: 'Email is required'
                           })}
                            className="input input-bordered w-full max-w-xs" />
                       {errors.email && <p className='text-red-600'>{errors.email.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Specialty</span></label>
                      
                        <select
                         {...register('specialty')}
                         className="select select-bordered w-full max-w-xs">
                     

                        {
                            specialties.map(specialty =>
                                 <option key={specialty._id}
                                 value={specialty?.name}
                                 >{specialty?.name}</option> )
                        }


                     
                   
                      </select>
                       
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Photo</span></label>
                        <input type="file"
                          {...register("image",{
                            required:'Photo is required'
                          })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                    </div>
                  
                    <input className='btn bg-gradient-to-r my-3 from-primary to-secondary border-0 w-full ' value="Add Doctor" type="submit" />
                    
                    <div className="flex items-center justify-between mt-2">
                   
   
    </div>

                </form>
        </div>
    );
};

export default AddedDoctor;