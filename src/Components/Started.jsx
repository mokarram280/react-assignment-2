import React from 'react';
import { Start } from '../lib/data/chain';

export const Started = () => {
  return (
    <section className='py-4 md:py-8 lg:py-12 xl:py-20 px-2 md:px-8 lg:px-16 xl:px-32'>
        <div className='text-center'>
            <h1 className='font-bold text-[32px]'>Let&apos;s get started</h1>
            <p className='text-secondary mt-3 max-w-[468px] leading-[26px] mx-auto mb-8 px-4 md:px-0'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit gene</p>
            <img src="/line.svg" alt="Line" className='mx-auto px-4' />

            <div className='flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-14 py-8'>
            {Start.map(({img,title,text},i)=>(
                <div key={i} className='bg-[#F4F4F5] w-60 h-72 px-5 border border-[#E4E4E7] rounded-lg'>
                    <img src={img} alt="Dangerous" className='size-14 mt-6' />
                    <h3 className='text-xl font-bold max-w-48 mt-[68px] text-start'>{title}</h3>
                    <p className='text-secondary text-sm font-normal text-start max-w-[195px] mt-[22px]'>{text}</p>
                </div>
            ))}
        </div>
        <button className='bg-primary text-white text-[12px] font-bold py-4 px-7 rounded-md mt-20'>Get started</button>
      </div>
    </section>
  )
};
