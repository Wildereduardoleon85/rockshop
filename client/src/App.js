import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Inicio from './Components/Views/Inicio/Inicio';


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
