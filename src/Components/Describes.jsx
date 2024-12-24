import React from 'react';
import { DescMenu } from './DescMenu';
import { icons } from '../lib/data/chain';

export const Describes = () => {
  return (
    <>
    <DescMenu />
        <section className='px-4 sm:px-16 md:px-20 lg:px-32 xl:px-[280px] py-10 space-y-6'>
            <h2 className='text-xl md:text-2xl font-bold'>Which of these best describes the incident?</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center'>
              {icons.map(({imgs,names},i)=>(
                 <div key={i} className='flex items-center gap-2 bg-[#F4F4F5] border border-[#E4E4E7] w-[180px] h-[69px] rounded-md mt-5 cursor-pointer hover:bg-primary group'>
                 <img src={imgs} alt="Avalanche" className='ps-5' />
                 <h4 className='text-sm text-secondary group-hover:text-white'>{names}</h4>
                 </div>
              ))}         
            </div>
        </section>
    </>
  )
}
