import FooterCenterBlock from './FooterCenterBlock';
import FooterLeftBlock from './FooterLeftBlock';
import FooterRightBlock from './FooterRightBlock';

const Footer = ({ showModal }) => {
    return ( 
        <>
            <section className="footer-container">
                <div className="footer-container-box">
                    <FooterLeftBlock />

                    <FooterCenterBlock />

                    <FooterRightBlock showModal={ showModal }/>
                </div>
            </section>
        </>
     );
}
 
export default Footer;