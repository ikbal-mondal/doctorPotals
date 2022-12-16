import React from 'react';
import chair from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';



const Banner = () => {
    return (
        <div>
            
           <section  className="dark:bg-gray-800 dark:text-gray-100 bg:opacity-50"style={{
    backgroundImage: `url(${bg})`,size:'cover',backgroundRepeat: 'no-repeat'}}  >
	<div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
		<div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
			<h1 className="text-4xl font-bold leading-none sm:text-4xl">Your New Smile Starts Here
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
				<br className="hidden md:inline lg:hidden"/>turpis pulvinar, est scelerisque ligula sem
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
             <PrimaryButton>Get Started</PrimaryButton>
				
			</div>
		</div>
		<div className="flex items-center  justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
			<img src={chair} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
		</div>
	</div>
</section>
        </div>
    );
};

export default Banner;