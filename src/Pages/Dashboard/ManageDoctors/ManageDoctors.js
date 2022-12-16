import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";

import Loading from "../../Shared/Loading/Loading";

const ManageDoctors = () => {
  const [deletingDoctor,setDeletingDoctor] = useState(null);



  const closeModal = () => {
    setDeletingDoctor(null);
  }
  const { data: doctors, isLoading , refetch} = useQuery({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        const res = await fetch("https://doctors-portal-server-b1sdo6rmh-ikbal-mondal.vercel.app/doctors", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });

  const handleDeleteDoctor = (doctor) => {
    fetch(`https://doctors-portal-server-b1sdo6rmh-ikbal-mondal.vercel.app/doctors/${doctor._id}`, {
     method: 'DELETE',
     headers:{
           authorization: `bearer ${localStorage.getItem('accessToken')}`
     }
    })
    .then(res => res.json())
    .then(data => {
    if(data.deletedCount > 0){
      refetch();
      toast.success(`Doctor ${doctor.name} Deleted successfully`)
    }
    
    })
   }


  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-4xl">Manage Doctors{doctors?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Avatar</th>
              <th>Name</th>
              <th>Email</th>
              <th>Specialty</th>
              <th>ActIon</th>
            </tr>
          </thead>
          <tbody>
            { doctors.length && 
            doctors?.map((doctor, i) => (
              <tr key={doctor._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                      <img  src={doctor?.image} alt="" />
                    </div>
                  </div>
                </td>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.specialty}</td>
                <td>
                <label onClick={() => setDeletingDoctor(doctor)} htmlFor="my-modal" className="btn btn-error px-6">Delete</label>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {
        deletingDoctor && <ConfirmationModal
        title={`Are You  Sure You Want To Delete?`}
        message={`If you delete ${deletingDoctor.name}. It cannot be Undone`}
        successAction ={handleDeleteDoctor}
        successButtonName='delete'
        modalData={deletingDoctor}
        closeModal ={closeModal}
        ></ConfirmationModal>
      }
    </div>
  );
};

export default ManageDoctors;
