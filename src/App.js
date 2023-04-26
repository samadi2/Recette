import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Titre from './components/Titre';

function App() {
  return (
    <div className="">
      <Sidebar />
      <Titre  text="Contact" />
      <Content />
      <Footer />
    </div>
    
  );
}

export default App;
