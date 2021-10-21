import logo from '../images/piggy-bank-logo.png';

const Navbar = () => {
    return ( 
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

            <div className="navbar_cta">
                <button>
                    Request Invite
                </button>
            </div>
        </nav>
     );
}
 
export default Navbar;