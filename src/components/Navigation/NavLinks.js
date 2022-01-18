import { Link } from 'react-router-dom';

const NavLinks = () => {
    return ( 
            <ul className="navbar_links">
                <li><Link href="/" to="/">Home</Link></li>
                <li><Link href="/about" to="/about">About</Link></li>
                <li><Link href="/contact" to="/contact">Contact</Link></li>
                <li><Link href="/careers" to="/careers">Careers</Link></li>
            </ul>
    );
}
 
export default NavLinks;