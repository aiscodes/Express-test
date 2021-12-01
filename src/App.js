import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contacts from './Pages/Contacts';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className='wallpaper'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='services' element={<Services />} />
        <Route path='contacts' element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
