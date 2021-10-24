import "../styles/index.scss";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WhyPiggyBank from "./WhyPiggyBank";
import ArticlesSection from "./ArticlesSection";

const App = () => {
  return (
    <main>
          <Navbar />
          <HeroSection />
          <WhyPiggyBank />
          <ArticlesSection />
    </main>
  );
};

export default App;
