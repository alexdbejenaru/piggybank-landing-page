import logo from '../images/piggy-bank-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

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
                            <a href="https://www.facebook.com"><FontAwesomeIcon className="social-links_badge" icon={ faFacebook } /></a>
                            <a href="https://www.youtube.com"><FontAwesomeIcon className="social-links_badge" icon={ faYoutube } /></a>
                            <a href="https://www.instagram.com"><FontAwesomeIcon className="social-links_badge" icon={ faInstagram } /></a>
                            <a href="https://www.pinterest.com"><FontAwesomeIcon className="social-links_badge" icon={ faPinterest } /></a>
                            <a href="https://www.twitter.com"><FontAwesomeIcon className="social-links_badge" icon={ faTwitter } /></a>
                        </div>
                    </div>

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