import React from 'react';
import { Build } from './index';

export const Building = () => {
  return (
    <section>
        <div className='py-10'>
            <div className='flex items-center justify-between mb-8 lg:mb-0'>
                <h3 className='text-sm font-bold'>Locations</h3>
                <p className='text-sm text-[#A1A1AA] border-b border-b-[#A1A1AA] cursor-pointer'>See all</p>
            </div>
             <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12 lg:gap-4'>
                {Build.map(({imgs,title,des,amount},i)=>(
                    <div key={i} className='space-y-2'>
                        <img src={imgs} alt="" className='w-full lg:w-[214px] h-full lg:h-[177px]' />
                        <h2 className='text-sm font-bold'>{title}</h2>
                        <p className='text-[12px] text-secondary'>{des}</p>
                        <h4 className='text-sm font-bold'>{amount}</h4>
                    </div>
                ))}
            </div>
        </div>
        <div className='border-b border-b-[#E4E4E7]'></div>
    </section>
  );
};
