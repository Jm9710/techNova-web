import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Asegúrate de tener este archivo para tus estilos personalizados
import './index.css'; // Asegúrate de tener este archivo para tus estilos personalizados
// Importa los componentes que has creado
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import ContactForm from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Projects />
      <ContactForm />
    </>
  );
}

export default App;
