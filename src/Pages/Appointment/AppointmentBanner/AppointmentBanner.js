import React from 'react';
import chair from '../../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({selectedDate,SetSelectedDate}) => {
    return (
        <header>
            <section className="dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			
        <DayPicker 
         mode='single'
         selected={selectedDate}
         onSelect={SetSelectedDate}
        />
    
       

		</div>
		<div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={chair} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </header>
    );
};

export default AppointmentBanner;