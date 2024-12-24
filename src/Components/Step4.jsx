import React from 'react'
import { DescMenu2 } from './DescMenu2';

export const Step4 = () => {
  return (
    <>
    <DescMenu2 />
        <section>
            <div className='mx-12 md:mx-48 lg:mx-56 xl:mx-[340px] py-10'>
                <div className='mb-6'>
                    <h2 className='text-2xl font-bold mb-3'>Let&apos;s give the incident a title?</h2>
                    <p className='text-sm text-secondary mb-6'>Make a title that will easily identify the incidents</p>
                    <input type="text" placeholder='Add title here' className='border border-gray-200 w-full bg-[#F4F4F5] rounded-md text-[12px] py-5 ps-2' />
                </div>
                <div>
                    <h2 className='text-2xl font-bold mb-3'>Describe what happened during the incident?</h2>
                    <p className='text-sm text-secondary mb-6'>Share some information about the incident. The when, where, how. </p>
                    <input type="text" placeholder='Type here' className='bg-[#F4F4F5] border border-gray-200 w-full text-[12px] rounded-md h-32 ps-2 pb-20' />
                </div>
            </div>
        </section>
    </>
  );
};
