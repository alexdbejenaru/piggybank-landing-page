import WhyCards from './WhyCards';

const WhyPiggyBank = () => {
    return ( 
        <>
        <section className="section-container">
            <div className="why-section">
                <h2 className="why-section_title">Why choose Piggy Bank?</h2>
                <p className="why-section_text">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>

            <WhyCards />
        </section>
        </>
     );
}

// Online Banking
// Our modern web and mobile applications allow you to keep track of your finances 
// wherever you are in the world.

// Simple Budgeting
// See exactly where your money goes each month. Receive notifications when you’re 
// close to hitting your limits.

// Fast Onboarding
// We don’t do branches. Open your account in minutes online and start taking control 
// of your finances right away.

// Open API
// Manage your savings, investments, pension, and much more from one account. Tracking 
// your money has never been easier.

export default WhyPiggyBank;