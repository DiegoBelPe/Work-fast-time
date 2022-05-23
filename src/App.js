import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeStart from './components/HomeStart/HomeStart';
import Contact from './pages/Contact';
import Services from './pages/Services';
import NavbarUser from './components/NavbarUser/NavbarUser';
import DashUser from './pages/DashUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/homestart" element={<HomeStart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="navbar-user" element={<NavbarUser />} />
        <Route path="dash-user" element={<DashUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
