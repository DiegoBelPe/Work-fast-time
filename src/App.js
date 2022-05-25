import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext } from 'react';
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeStart from './components/HomeStart/HomeStart';
import Contact from './pages/Contact';
import Services from './pages/Services';
import NavbarUser from './components/NavbarUser/NavbarUser';
import DashUser from './pages/DashUser';
import Task from './components/Task/Task';
import FormReport from './components/FormReport/FormReport';
import RequireAuth from './components/RequireAuth';
import { UserContext } from './context/UserProvider';
import LayoutContainerForm from './components/LayoutContainerForm/LayoutContainerForm';

function App() {
  const { user } = useContext(UserContext);
  if (user === false) {
    return <p>Loading...</p>;
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/homestart" element={<HomeStart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Services />} />
        <Route path="navbar-user" element={<NavbarUser />} />
        <Route
          path="dash-user"
          element={(
            <RequireAuth>
              <DashUser />
            </RequireAuth>
      )}
        />
        <Route path="/" element={<LayoutContainerForm />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
        <Route path="/task" element={<Task />} />
        <Route path="/form" element={<FormReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
