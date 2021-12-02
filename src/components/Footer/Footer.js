import FooterCenterBlock from './FooterCenterBlock';
import FooterLeftBlock from './FooterLeftBlock';
import FooterRightBlock from './FooterRightBlock';

const Footer = () => {
    return ( 
        <>
            <section className="footer-container">
                <div className="footer-container-box">
                    <FooterLeftBlock />

                    <FooterCenterBlock />

                    <FooterRightBlock />
                </div>
            </section>
        </>
     );
}
 
export default Footer;