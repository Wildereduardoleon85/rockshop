import './index.css';
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Inicio from './Components/Views/Inicio';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <Inicio/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
