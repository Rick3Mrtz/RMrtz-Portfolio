import './App.css';
import Navbar from '../src/components/Navbar.js'
import Header from '../src/components/Header.js'
import Section from '../src/components/Section.js'
import Footer from '../src/components/Footer.js'
import Space from './components/Space.js'
import Contact from './components/Contact.js'
import Education from './components/Education.js'
import Reveal from './components/Reveal';


function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Space />
      <Section />
      <Space />
      <Education />
      <Space />
      <Contact />
      <Footer /> 
        
    </div>
  );
}

export default App;
