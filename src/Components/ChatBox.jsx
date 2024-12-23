import React from 'react';
import { CiCamera, CiImageOn } from "react-icons/ci";
import { GoPaperclip } from "react-icons/go";
import { GrClose } from "react-icons/gr";
import { ControlButton } from './ControlButton';


export const ChatBox = () => {
  return (
    <section className='bg-[#F4F4F5] h-[550px] w-[331px] rounded-xl relative'>
        <div className='h-[63px] bg-primary rounded-t-xl'>
            <h2 className='pt-5 ps-4 text-[18px] font-bold text-white'>Chat with Cypher</h2>
        </div>
        <div className='mt-7 space-y-4 px-4'>
           <div className='bg-gray-800 text-white max-w-64 text-[12px] py-4 px-3 rounded-md ms-16'>Lorem ipsum dolar sit general sac mascho werho</div>
           <div className='text-gray-800 border border-gray-200 max-w-64 text-[12px] py-4 px-3 rounded-md'>Lorem ipsum dolar sit general sac mascho werho</div>
           <div className='text-gray-800 border border-gray-200 max-w-64 text-[12px] py-4 px-3 rounded-md'>Lorem ipsum dolar sit general sac mascho werho</div>
           <div className='bg-gray-800 text-white max-w-64 text-[12px] py-4 px-3 rounded-md ms-16'>Lorem ipsum dolar sit general sac mascho werho</div>
        </div>
        <div className='px-4 pt-4'>
            <input type="text" placeholder='Enter your question...' className='border border-gray-200 w-full bg-transparent text-[12px] py-4 ps-[10px] rounded-md' />
        </div>
        <div className='flex items-center justify-between mt-[10px] px-4'>
            <div className='flex items-center gap-2 cursor-pointer'>
                <CiCamera size={25} />
                <CiImageOn size={25} />
                <GoPaperclip size={25} />
            </div>
            <button className='bg-primary text-white py-3 px-6 rounded-full text-[12px]'>Send</button>
        </div>
        <div className='absolute -bottom-20 right-0 bg-white shadow-lg rounded-full size-16 flex justify-center md:hidden'>
            <button>
                <GrClose size={30} />
            </button>
        </div>
        <ControlButton />
    </section>
  )
}
