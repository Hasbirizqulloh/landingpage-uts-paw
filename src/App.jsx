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
        <Route path="/" Component={Homepage} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <FooterComponent />
    </div>
  );
}

export default App;
