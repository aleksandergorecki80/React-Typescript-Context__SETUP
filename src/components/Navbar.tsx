import React, { useState } from 'react';

interface NavbarProps {
    
}
 
const Navbar: React.FC<NavbarProps> = () => {
    const [onoff, setOnoff] = useState(true);
    return ( 
    <>
        <button onClick={() => setOnoff(!onoff)}>ON / OFF</button>
    </> );
}
 
export default Navbar;