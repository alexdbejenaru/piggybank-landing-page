import HeroImage from '../images/image-mockups-piggy-bank.png'

const HeroSection = () => {
    return ( 
        <>
        <main className="hero_container">
            <section className="text">
                <div className="text_title">Next generation digital banking</div>
                <div className="text_secondary">
                    Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more
                </div>
                <div className="button_cta cta">
                    <button>
                        Request Invite
                    </button>
                </div>
            </section>
            <section className="image">
                <img src={HeroImage} alt="Hero Image" />
            </section>
        </main>
        </>
     );
}
 
export default HeroSection;