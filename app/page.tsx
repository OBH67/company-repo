import Hero from '../components/organisms/Hero';
import Services from '../components/organisms/Services';
import About from '../components/organisms/About';
import Portfolio from '../components/organisms/Portfolio';
import Contact from '../components/templates/Contact';
import Footer from '../components/organisms/Footer';
import Navbar from '../components/organisms/Navbar';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
