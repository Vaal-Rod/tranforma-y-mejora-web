import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import AboutUs from "./components/sections/AboutUs";
import Services from "./components/sections/Services";
import WhyUs from "./components/sections/WhyUs";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
