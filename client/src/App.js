import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import HomeScreen from './Components/Screens/HomeScreen';
import ProductScreen from './Components/Screens/ProductScreen/ProductScreen';
import LatestProducts from './Components/LatestProducts/LatestProducts';
import Loader from './Components/Screens/Loader/Loader';

function App() {
  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <main>
        <LatestProducts/>
        <Route path="/" component={HomeScreen} exact />
        <Route path="/product/:id" component={ProductScreen} />
      </main>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;
