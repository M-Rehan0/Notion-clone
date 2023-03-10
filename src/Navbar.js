import React from 'react';
import { useState } from "react";


function Navbar() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
      };
      
      const closeSidebar = () => {
        setIsSidebarOpen(false);
      };
      

    return (
        <nav>
            <ul>
                <li><button onClick={isSidebarOpen ? closeSidebar : openSidebar}>&#9776;{isSidebarOpen ? closeSidebar : openSidebar}</button></li>
                <li><span>Lotion</span></li>
            </ul>
        </nav>
    );
};


export default Navbar;
