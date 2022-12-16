import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect } from 'react';
import { useState } from 'react';

const ChenkoutFrom = ({booking}) => {
    const [cardError,setCardError] = useState('');
    const [success,setSuccess] = useState('');
    const [processing,setProcessing] = useState(false);
    const [transactionId,setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    console.log('client Secret: ',clientSecret);
  const  stripe = useStripe();
  const elements = useElements()
  const {price,email,patient,_id} = booking;

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://doctors-portal-server-b1sdo6rmh-ikbal-mondal.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
         "Content-Type": "application/json" ,
         authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);


  const handleSubmit = async(event)=> {
   event.preventDefault();
   if(!stripe || !elements){
    return
   }
   const card = elements.getElement(CardElement);
   if(card ==  null){
    return;
   }

    const {error,paymentMethod} = await stripe.createPaymentMethod({
        type:'card',
        card
    })
    if(error){
       console.log(error);
       setCardError(error.message)
    }
    else{
        setCardError('');
    }
     setSuccess('');
     setProcessing(true)
    const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: patient,
            email:email
          },
        },
      },
    );

    if(confirmError){
      setCardError(confirmError.message);
      return;
    }
    if(paymentIntent.status === "succeeded"){
       
     
        // store payment info in the database
   
         const payment = {
              price ,
              transactionId: paymentIntent.id,
              email,
              bookingId: _id
         }

        fetch('https://doctors-portal-server-b1sdo6rmh-ikbal-mondal.vercel.app/payments', {

          method: 'POST',
          headers: {
            'content-type': 'application/json',
            authorization:`bearer ${localStorage.getItem('accessToken')}`
          },
          body: JSON.stringify(payment)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            
            setSuccess('Congrats! your payment completed');
            setTransactionId(paymentIntent.id);
          }
        })
    }
    setProcessing(false)
    

  }

    return (
      <>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary my-6' type="submit" disabled={!stripe || !clientSecret || processing }>
        Pay
      </button>
    </form>
    <p className='text-red-700'>{cardError}</p>
    {
      success && 
      <div className="">
        <p className='text-green-700'>{success}</p>
        <p>Your TransactionId: <span className='font-medium'>{transactionId}</span></p>
      </div>
    }
      </>
    );
};

export default ChenkoutFrom;