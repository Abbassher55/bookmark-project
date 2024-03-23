import Extensions from "./Extensions/Extensions";
import Footer from "./Footer/Footer";
import Faq from "./faq/Faq";
import Features from "./features/Features";
import Hero from "./hero-section/Hero";
import Navbar from "./navbar/Navbar";
import Newsletter from "./newsletter/Newsletter";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Features />
        <Extensions />
        <Faq />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
