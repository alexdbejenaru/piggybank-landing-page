import ContactHeroSection from "../components/Contact/ContactHeroSection";
import ContactFormSection from "../components/Contact/ContactFormSection";

const Contact = () => {
    return ( 
        <>
            <div className="contact-content">
                <ContactHeroSection />
                <ContactFormSection />
            </div>
        </>
     );
}
 
export default Contact;