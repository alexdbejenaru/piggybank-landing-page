import logo from '../images/piggy-bank-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return ( 
        <>
            <section className="footer-container">
                <div className="footer-container-box">
                    <div className="left-block">
                        <div className="footer_logo">
                            <img src={logo} alt="Piggy Bank" />
                        </div>

                        <div className="social-links">
                            <FontAwesomeIcon className="social-links_badge" icon={ faFacebook } />
                            <FontAwesomeIcon className="social-links_badge" icon={ faYoutube } />
                            <FontAwesomeIcon className="social-links_badge" icon={ faInstagram } />
                            <FontAwesomeIcon className="social-links_badge" icon={ faPinterest } />
                            <FontAwesomeIcon className="social-links_badge" icon={ faTwitter } />
                        </div>
                    </div>

                    <div className="center-block">
                        <div className="left-list">
                            <ul className="footer-nav">
                                <li className="footer-nav_link">About Us</li>
                                <li className="footer-nav_link">Contact</li>
                                <li className="footer-nav_link">Blog</li>
                            </ul>
                        </div>

                        <div className="right-list">
                            <ul className="footer-nav">
                                <li className="footer-nav_link">Careers</li>
                                <li className="footer-nav_link">Support</li>
                                <li className="footer-nav_link">Privacy Policy</li>
                            </ul>
                        </div>
                    </div>

                    <div className="right-block">
                        <div className="navbar_cta cta">
                            <button>
                                Request Invite
                            </button>
                        </div>
                        <div className="copyright">
                            <p className="copyright_text">&copy;Alex Bejenaru - 2021, All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
     );
}
 
export default Footer;