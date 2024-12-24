import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { navItems } from '../lib/data/chain';
import { Link,Outlet } from 'react-router-dom';


const NavbarArea = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNav = () => {
    setIsOpen(!isOpen);
  };
 
  return (
    <>
    <nav className='px-8 lg:px-12 xl:px-[85.5px] border-b border-b-[#E4E4E7] bg-[#E4E4E780]'>
    <div className='flex justify-between items-center py-6 max-w-[1440px] mx-auto text-black'>
      <img src="/logo.svg" alt="Logo" className='w-[131px] h-[36px]' />

      <div className='flex items-center justify-center gap-4'>
            {navItems.map(({lable,link},i)=>
                <Link to={link} key={i} className='text-foreground hover:text-gray-800 hover:font-bold transition duration-300'>
                    <p className='hidden lg:flex'>{lable}</p>
                </Link>
            )}
      </div>

      <div onClick={handleNav} className='block lg:hidden'>
        {isOpen ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      <ul
        className={
          isOpen ? 'fixed lg:hidden left-0 top-0 w-[60%] h-full z-10 border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <img src="/logo.svg" alt="Logo" className='m-4' />

        {navItems.map(({lable,link},i)=>
             <a href={link} key={i}>
                 <p className='text-white text-md p-4 border-b rounded-xl hover:bg-line duration-300 hover:bg-primary cursor-pointer border-gray-600'>{lable}</p>
             </a>
             )}
        </ul>
        <div className='hidden lg:flex items-center gap-1'>
          <img src="/ring.svg" alt="ring" className='w-10 h-10' />
          <img src="/avator.svg" alt="avator" className='w-10 h-10' />
          <div className='text-foreground'>
            <h5 className='text-base font-semibold'>Usman Zafar</h5>
            <p className='text-[14px] font-normal'>usmanzafar@gmail.com</p>
          </div>
      </div>
     </div>
    </nav>
    <Outlet />
    </>
  );
};

export default NavbarArea;
