import { Link } from 'react-router-dom';

const NavLinks = () => {
    return ( 
            <ul className="navbar_links">
                <li><Link className="links" href="/" to="/">Home</Link></li>
                <li><Link className="links" href="/about" to="/about">About</Link></li>
                <li><Link className="links" href="/contact" to="/contact">Contact</Link></li>
                <li><Link className="links" href="/careers" to="/careers">Careers</Link></li>
            </ul>
    );
}
 
export default NavLinks;