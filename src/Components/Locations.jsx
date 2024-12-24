import React from 'react'
import { Lock } from './Lock';
import { Country } from '../lib/data/Country';
import { Building } from '../lib/data/Building';
import { Activitiess } from '../lib/data/Activitiess';
import { Documents } from '../lib/data/Documents';

export const Locations = () => {
  return (
    <>
    <Lock />
        <section>
            <div className='flex flex-col-reverse lg:flex-row items-start justify-between pt-10 pb-12 lg:pb-32'>
                <div className='w-full lg:w-1/2 lg:ps-16 px-8 lg:px-0'>
                    <div>
                        <Country />   
                    </div>
                    <div className='py-10 space-y-3 border-b border-b-[#E4E4E7]'>
                        <h3 className='text-sm font-bold'>Description</h3>
                        <p className='text-[16px] text-secondary'>Lorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werhoLorem ipsum dolar sit general sac mascho werho</p>
                    </div>
                    <div>
                        <Building />
                    </div>
                    <div>
                        <Activitiess />
                    </div>
                    <div>
                        <Documents />
                    </div>
                </div>
                <div className='w-full lg:w-1/2 px-4 lg:px-16'>
                    <div className='flex flex-col justify-center space-y-5'>
                        <p className='text-sm text-secondary'>Incident Map</p>
                        <img src="/map1.svg" alt="" className='w-full' />
                        <p className='text-sm text-secondary'>Start 19.1232, -118.233    End 19.3245, -119.2323</p>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};
