import HeroSection from "../components/Homepage/HeroSection";
import WhyPiggyBank from "../components/Homepage/WhyPiggyBank";
import ArticlesSection from "../components/Homepage/ArticlesSection";

const Homepage = ({ showModal }) => {
    return ( 
        <>
        <HeroSection showModal={ showModal }/>
        <WhyPiggyBank />
        <ArticlesSection />
        </>
     );
}
 
export default Homepage;