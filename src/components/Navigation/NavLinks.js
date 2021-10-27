import { Link } from 'react-router-dom';

const NavLinks = () => {
    return ( 
            <ul className="navbar_links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/careers">Careers</Link></li>
            </ul>
    );
}
 
export default NavLinks;