import "../styles/index.scss";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhyPiggyBank from "./WhyPiggyBank";
import ArticlesSection from "./ArticlesSection";
import Footer from './Footer';


const App = () => {
  return (
    <main>
          <Navbar />
          <HeroSection />
          <WhyPiggyBank />
          <ArticlesSection />
          <Footer />
    </main>
  );
};

export default App;
