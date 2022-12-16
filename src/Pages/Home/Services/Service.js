import React from 'react';

const Service = ({service}) => { 
    const { name, description,  icon } = service
    return (
        <div>
            <div className="px-6 py-8 bg-base-100 shadow-xl rounded-lg shadow-slate-300 ">
      <div className="">
        <div className="text-center">
            <img className='mx-auto my-4' src={icon} alt="" />
          <h6 className="text-xl font-bold ">{name}</h6>
          <p className="">{description}</p>
        </div>
 
      </div>
    </div> 
        </div>
    );
};

export default Service;