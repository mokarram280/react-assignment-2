import React from 'react';
import { Link } from 'react-router-dom';
import { GrClose } from "react-icons/gr";

export const DescMenu = () => {
  return (
    <section className='bg-[#E4E4E780] px-8 lg:px-12 xl:px-[86px] pt-8 pb-[29px]'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
      <div className='flex items-center gap-4'>
        <Link to='/dashboard'>
          <button className='bg-white p-3 rounded-full'><GrClose size={20} /></button>
        </Link>
        <div>
        <p className='text-[12px] text-secondary'>Home - Incidents - New Incident</p>
        <h2 className='text-[26px] font-bold text-[#09090B]'>New Incident</h2>
        </div>
        <div className='ms-10 hidden xl:flex'><img src="/hline.svg" alt="Line" className='w-32 xl:w-full' /></div>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-[14px] text-[12px] font-normal'>
        <Link to='/started'>
        <button className='bg-white text-black py-4 px-[55px] rounded-md border border-gray-200 font-bold'>
          Back
        </button>
        </Link>
        <Link to='/step4'>
        <button className='bg-primary text-white py-4 px-[25px] rounded-md font-bold'>
           Next step
        </button>
        </Link>
      </div>
     </div>
    </section>
  );
};
