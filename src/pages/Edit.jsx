import React from 'react'
import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar';
import Dashboard from '../components/Dashboard'
import EditCompo from '../components/EditCompo'

function Edit() {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    return (
        <div className="flex flex-col h-screen">
          <Navbar
            sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle}
          />
    
          <div className="flex flex-grow">
            {/* Sidebar */}
            <Sidebar sidebarToggle={sidebarToggle} />
    
            {/* Main Content Area */}
            <div className="flex-grow">
              <EditCompo />
            </div>
          </div>
        </div>
      );
}

export default Edit