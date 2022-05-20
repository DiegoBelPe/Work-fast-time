import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Task from './components/Task/Task';
import Navbar from './components/Navbar/Navbar';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Task />} />
        <Route path="/navbar" element={<Navbar />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
