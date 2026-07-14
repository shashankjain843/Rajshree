import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import ManufacturingProcess from './components/ManufacturingProcess';
import Products from './components/Products';
import QualityControl from './components/QualityControl';
import Logistics from './components/Logistics';
import Exhibitions from './components/Exhibitions';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-brand-blue selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <ManufacturingProcess />
        <Products />
        <QualityControl />
        <Logistics />
        <Exhibitions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
