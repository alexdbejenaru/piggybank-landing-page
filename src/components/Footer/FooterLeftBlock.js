import logo from '../../images/piggy-bank-logo.png';

const FooterLeftBlock = () => {
    return ( 
        <div className="left-block">
            <div className="footer_logo">
                <img src={ logo } alt="Piggy Bank" />
            </div>
            <div className="footer_address">
                <p className="footer_address__text">399 74th Street, San Colorado</p>
            </div>
            
        </div>
     );
}
 
export default FooterLeftBlock;