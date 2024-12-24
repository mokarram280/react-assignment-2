import React from 'react'
import { Lock } from './Lock';
import { Country } from '../lib/data/Country';

export const Locations = () => {
  return (
    <>
    <Lock />
        <section>
            <div className='flex'>
                <div className='w-1/2 pt-10 px-16'>
                    <div>
                        <Country />
                    </div>
                </div>
                <div className='text-center w-1/2'>Incident Map</div>
            </div>
        </section>
    </>
  );
};
