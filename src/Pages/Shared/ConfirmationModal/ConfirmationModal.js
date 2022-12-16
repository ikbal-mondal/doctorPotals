import React from 'react';

const ConfirmationModal = ({title,message,closeModal,modalData,successAction,successButtonName}) => {
    return (
        <div>
{/* The button to open modal */}
{/* <label htmlFor="my-modal" className="btn">open modal</label> */}

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title}</h3>
    <p className="py-4">{message}</p>
    <div className="modal-action">
      <label  onClick={() => successAction(modalData)} htmlFor="my-modal" className="btn btn-error">{successButtonName}</label>
      <button onClick={closeModal} className='btn border-t-green-400'>Cancel</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationModal;