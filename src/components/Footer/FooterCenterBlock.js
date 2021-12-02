import { Link } from 'react-router-dom';

const FooterCenterBlock = () => {
    return ( 
        <div className="center-block">
            <div className="left-list">
                <ul className="footer-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </div>

            <div className="right-list">
                <ul className="footer-nav">
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/careers">Careers</Link></li>
                </ul>
            </div>
        </div>
     );
}
 
export default FooterCenterBlock;