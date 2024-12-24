import React from 'react';
import { Star } from '.';

export const Documents = () => {
  return (
    <section>
          <div className='py-10'>
            <div className='flex items-center justify-between'>
                    <h3 className='text-sm font-bold'>Documents</h3>
                    <p className='text-sm text-[#A1A1AA] border-b border-b-[#A1A1AA] cursor-pointer'>See all</p>
                </div>
            <div className=''>
                {Star.map(({image,actname,locat,money},i)=>(
                    <div key={i} className='flex items-center gap-4 bg-[#F4F4F5] rounded-xl py-3 ps-[10px] my-4'>
                        <img src={image} alt="" className='w-20 h-20' />
                    <div>
                       <h4 className='text-[16px] font-bold'>{actname}</h4>
                       <p className='text-sm text-secondary'>{locat}</p>
                       <h3 className='text-[16px] font-bold'>{money}</h3>
                    </div>
                    </div>
                ))} 
            </div>
          </div>
          <div className='border-b border-[#E4E4E7]'></div>
        </section>
  );
};
