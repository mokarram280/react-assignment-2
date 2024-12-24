import React from 'react';
import { TiLocation } from "react-icons/ti";
import { FaMoneyBill } from "react-icons/fa6";

export const Country = () => {
  return (
    <section className='space-y-11 mt-12 lg:mt-0'>  
        <div className='flex items-center gap-4'>
            <div className='bg-[#F4F4F5] text-secondary size-9 flex items-center justify-center rounded-full'>
                <TiLocation size={20} />
            </div>
            <div className='space-y-2'>
            <h5 className='text-sm text-[#6B7280]'>Location</h5>
            <h2 className='text-xl font-bold text-black'>Tulare County,  Los Angles, CA 23415</h2>
            </div>
        </div>
        <div className='flex items-center gap-4'>
            <div className='bg-[#F4F4F5] text-secondary size-9 flex items-center justify-center rounded-full'>
                <FaMoneyBill size={15} />
            </div>
            <div className='space-y-2'>
            <h5 className='text-sm text-[#6B7280]'>Approx. Cost:</h5>
            <h2 className='text-xl font-bold text-black'>$60,607,456.00</h2>
            </div>
        </div>
        <div className='border-b border-b-[#E4E4E7]'></div>
    </section>
  );
};
