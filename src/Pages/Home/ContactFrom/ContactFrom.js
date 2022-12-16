import React from 'react';
import appointment from '../../../assets/images/appointment.png'
const ContactFrom = () => {
    return (
        <div>
            <section className="p-6 dark:text-gray-100"
            style={{
                background:`url(${appointment})`
             }}
            >
	<form novalidate="" className="container my-8  w-full max-w-xl p-8 mx-auto space-y-6   ">
           <div className="text-center">
           <h2 className="text-xl font-bold text-primary">Contact us</h2>
        <h3 className='text-2xl text-white'>Stay connected with us</h3>
           </div>
        <div>
			
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		<div>
			<input name='subject' type="text" placeholder="Your Subject" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
		</div>
		
		<div>
			
			<textarea id="message" type="text" placeholder="Your Message..." className="block w-full p-2 rounded  focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 dark:text-gray-900 bg-gradient-to-r from-primary to-secondary border-0">Send</button>
		</div>
	</form>
</section>
        </div>
    );
};

export default ContactFrom;