import React from 'react'
import { FaBars, FaSearch } from 'react-icons/fa'

function Navbar({sidebarToggle, setSidebarToggle}) {
  return (
    <nav className='bg-gray-800 px-4 py-3 flex justify-between'>
        <div className='flex items-center text-xl'>
            <FaBars className='text-white me-4 cursor-pointer' 
                    onClick={() => setSidebarToggle(!sidebarToggle)} />
            <span className='text-white font-semibold'>To Do</span>
        </div>
        <div className='flex items-center gap-x-5'>
            {/* <div className='relative md:w-65'>
                <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
                    <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch /></button>
                </span>
                <input type='text' className='w-full px-4 py-1 pl-12 rounded shadow outline-none'></input>
            </div> */}

            <div className='relative me-16'>
                <a href="/login" className='font-bold text-blue-500 gap-x-2 mr-5'>Login</a>
                <a href="/signup" className='font-bold text-blue-500 gap-x-2 mr-5'>SignUp</a>
            </div>
        </div>
    </nav>
  )
}

export default Navbar