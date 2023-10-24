import { Routes, Route } from 'react-router-dom';
import NavbarComponent from './component/NavbarComponent';
import Homepage from './pages/HomePage';
import FooterComponent from './component/FooterComponent';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/landingpage-uts-paw" Component={Homepage} />
        <Route path="/landingpage-uts-paw/contact" Component={Contact} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
