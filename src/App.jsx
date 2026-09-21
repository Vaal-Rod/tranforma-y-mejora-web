import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import AboutUs from "./components/sections/AboutUs";
import Services from "./components/sections/Services";
import Media from "./components/sections/Media";
import WhyUs from "./components/sections/WhyUs";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Media />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
