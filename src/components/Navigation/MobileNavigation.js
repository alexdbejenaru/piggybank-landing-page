import NavLinks from "./NavLinks";
import { HiMenuAlt3 } from 'react-icons/hi';
import { useState } from "react";
import { GrClose } from 'react-icons/gr';

const MobileNavigation = () => {
    const [open, setOpen] = useState(false)
    const hamburgerIcon = <HiMenuAlt3 onClick={() => setOpen(!open)} className="hamburger-icon" />;
    const closeIcon = <GrClose onClick={() => setOpen(!open)} className="close-icon" />;

    return (
        <div className="mobile-navigation"> 
            {open ? closeIcon : hamburgerIcon}
            {open && <NavLinks />}
        </div>
     );
}
 
export default MobileNavigation;