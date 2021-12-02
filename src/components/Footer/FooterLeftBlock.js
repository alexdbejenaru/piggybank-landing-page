import logo from '../../images/piggy-bank-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

const FooterLeftBlock = () => {
    return ( 
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
     );
}
 
export default FooterLeftBlock;