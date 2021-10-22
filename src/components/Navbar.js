import logo from '../images/piggy-bank-logo.png';
import { useState } from 'react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 100) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }
    
    window.addEventListener('scroll', changeBackground);

    return ( 
        <div className={scrolled ? 'navbar_container navbar-shadow' : 'navbar_container'}>
            <nav className="navbar">
                <div className="navbar_logo">
                    <img src={logo} alt="Piggy Bank" />
                </div>

                <ul className="navbar_links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                    <li>Careers</li>
                </ul>

                <div className="navbar_cta cta">
                    <button>
                        Request Invite
                    </button>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;