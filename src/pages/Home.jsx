import React from 'react';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Cart from '../components/Cart'

function Home() {
  const [sidebarToggle, setSidebarToggle] = useState(false);

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar at the top */}
      <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}
      />

      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar sidebarToggle={sidebarToggle} />

        {/* Main Content Area */}
        <div className="flex-grow">
          <Cart />
        </div>
      </div>
    </div>
  );
}

export default Home;
