import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Signal } from './components/Signal';
import { Work } from './components/Work';
import { Stack } from './components/Stack';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { MatrixRain } from './components/MatrixRain';

function App() {
  return (
    <>
      <MatrixRain />
      <a href="#signal" className="skip-link">Skip to content</a>
      <Navigation />
      <main>
        <Hero />
        <Signal />
        <Work />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
