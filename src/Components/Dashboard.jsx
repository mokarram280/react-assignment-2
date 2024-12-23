import React, { useState } from 'react';
import { cards } from '../lib/data/chain';
import { ChatBox } from './ChatBox';
import { Contorl } from '../lib/data/Contorl';

export const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

    const cardOpen = () =>{
        setIsOpen(!isOpen);
    };
  return (
    <section className='pt-10 xl:pb-[271px] px-4 md:px-12 lg:px-16 xl:px-[70px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            {cards.map(({img1,img2,title,address,location,amount},i)=>(
                <div key={i} className='mx-auto'>
                <div className='relative'>        
                <img src={img1} alt="Image" className='w-[306px] h-[253px]' />
                <div className='flex items-center gap-[5px] bg-white p-[10px] rounded-[40px] absolute  top-3 left-[205px] md:top-5 md:left-[190px] lg:top-6 lg:left-[170px]'>
                <img src={img2} alt="Cloud" className='w-4 h-4' />
                <p className='text-[12px] font-bold'>{title}</p>
                </div>
                </div>
                <div className='mt-5 space-y-3'>
                    <h4 className='text-base font-bold'>{address}</h4>
                    <p className='text-md font-normal text-secondary'>{location}</p>
                    <h5 className='text-base font-bold'>{amount}</h5>
                </div>
                </div>
            ))}
            <div onClick={cardOpen} className='md:ms-[271px] mx-auto'>
            {isOpen ? <ChatBox /> : <Contorl /> }
        </div>   
        </div>
    </section>
  );
};
