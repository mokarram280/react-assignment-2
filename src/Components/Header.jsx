import React from 'react';
import { IoIosSearch } from "react-icons/io";

export const Header = () => {
  return (
    <header className='bg-[#E4E4E780] px-8 lg:px-12 xl:px-[86px] font-onest pt-8 pb-[29px]'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
      <div>
        <p className='text-[12px] text-secondary'>Welcome back</p>
        <h2 className='text-[26px] font-bold text-[#09090B]'>Dashboard</h2>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-[14px] text-[12px] font-normal'>
        <div className='flex items-center justify-center gap-1 bg-white text-secondary py-4 ps-[10px] pe-[69px] rounded-md'>
        <IoIosSearch />
        <p>Search incident</p>
        </div>
        <div className='bg-white py-4 px-[10px] rounded-md text-secondary'><span className='text-foreground'>Sort By:</span> Date modified</div>
        <button className='bg-primary text-white py-4 px-[25px] rounded-md'>Cypher AI</button>
      </div>
     </div>
    </header>
  )
}
