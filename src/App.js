import './App.css';
import  { BrowserRouter as Router, Routes, Route}   from 'react-router-dom';
import Accueil from './pages/Accueil';
import Recette from './pages/Recette';
import Contact from './pages/Contact';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
function App() {
  return (
    
    <Router>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Accueil/>} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/Recette' element={<Recette/>} />
      </Routes>
      <Footer />
    </Router>
   


  );
}

export default App;
