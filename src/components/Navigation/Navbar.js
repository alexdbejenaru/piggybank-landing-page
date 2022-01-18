import logo from '../../images/piggy-bank-logo.png';
import { useState } from 'react';
import MobileNavigation from './MobileNavigation';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';

const Navbar = ({ showModal }) => {

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
                    <Link to="/"><img src={logo} alt="Piggy Bank" /></Link>
                </div>
                    <Navigation />
                    <MobileNavigation />
                <div onClick={showModal} className="navbar_cta cta">
                    <button>
                        Request Invite
                    </button>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;