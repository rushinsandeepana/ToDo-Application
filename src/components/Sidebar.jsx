import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdChecklist, MdExitToApp } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

function Sidebar({ sidebarToggle }) {
  const navigate = useNavigate();

  const handleSignOut = () => {
    const confirmed = window.confirm('Do you want to sign out?');

    if (confirmed) {
      localStorage.removeItem('userDetails');
      localStorage.removeItem('todos');

      navigate('/');
    }
  };

  return (
    <div className={`${sidebarToggle ? ' hidden ' : ' block '} w-64 bg-gray-800 fixed h-full px-4 py-2`}>
      <div className='my-2 mb-4'>
        <h1 className='text-2x text-white font-bold'>Admin Dashboard</h1>
      </div>
      <hr />
      <ul className='mt-3 text-white font-bold'>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='/' className='px-3'>
            <FaHome className='inline-block w-6 h-6 mr-2 -mt-2' />
            Home
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <a href='/addtodo' className='px-3'>
            <MdChecklist className='inline-block w-6 h-6 mr-2 -mt-2' />
            Add To Do
          </a>
        </li>
        <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
          <button
            onClick={handleSignOut}
            className='px-3 w-full text-left'
          >
            <MdExitToApp className='inline-block w-6 h-6 mr-2 -mt-2' />
            Sign Out
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
