import React from 'react'
import { DescMenu3 } from './DescMenu3'

export const Step5 = () => {
  return (
    <>
    <DescMenu3 />
        <section>
            <div className='mx-12 md:mx-48 lg:mx-56 xl:mx-[345px] py-10'>
                <h2 className='text-2xl font-bold mb-3'>Where&apos;s the incident?</h2>
                <p className='text-sm text-secondary mb-6 md:max-w-[518px]'>Enter a GPS, address. or pin point on the map. Try to be as accurate as possible, or click:Jurisdiction Wide</p>
                <div>
                   <img src="/map.svg" alt="Map" />
                </div>
            </div>
        </section>
    </>
  );
};
