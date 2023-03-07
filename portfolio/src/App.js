import './App.css';
import Navbar from '../src/components/Navbar.js'
import Header from '../src/components/Header.js'
import Section from '../src/components/Section.js'
import Footer from '../src/components/Footer.js'
import Space from './components/Space.js'
import Contact from './components/Contact.js'
import Education from './components/Education.js'
import Background from './components/Background.js';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Space />
      <Section />
      <Space />
      <Education />
     
      <Contact />
      <Background />
      {/* <Footer />  */}
        
    </div>
  );
}

export default App;
