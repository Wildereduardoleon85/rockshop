/* import './index.css'; */
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Products from './Components/Products/Products';
import LatestProducts from './Components/LatestProducts/LatestProducts';

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        <LatestProducts/>
        <Products/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
