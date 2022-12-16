import React from 'react';

const Review = ({review}) => {
    const {name,img,location,reviews} =  review;
    return (
        <section className="my-8  dark:text-gray-100">
	
	<div className=" flex flex-col  lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
		<div className="flex flex-col   my-6 border-2 border-slate-100 shadow-2xl ">
			<div className="px-4 py-12 rounded-t-lg sm:px-4 md:px-12 dark:bg-gray-900">
				<p className="relative  py-1 text-lg italic text-center dark:text-gray-100">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className=" h-8 dark:text-violet-400">
						<path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
						<path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
					</svg>{reviews}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0  h-8 dark:text-violet-400">
						<path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
						<path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
					</svg>
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-gradient-to-r from-primary to-secondary ">
				<img src={img} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full " />
				<p className="text-xl font-semibold leading-tight">{name}</p>
				<p className="text-sm uppercase">{location}</p>
			</div>
		</div>
	</div>
</section>
    );
};

export default Review;