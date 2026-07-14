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
import Chatbot from './components/Chatbot';
import MobileStatusBar from './components/MobileStatusBar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 antialiased selection:bg-brand-blue selection:text-white overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <main className="pb-16 lg:pb-0"> {/* padding-bottom to avoid sticky mobile bar overlapping footer on mobile */}
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
      <Chatbot />
      <MobileStatusBar />
    </div>
  );
}
