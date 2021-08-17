import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/layout/Navbar/Navbar';
import Footer from './Components/layout/Footer';
import Home from './Components/Home';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import LatestProducts from './Components/LatestProducts/LatestProducts';

function App() {
  return (
    <Router>
      <header>
        <Navbar/>
      </header>
      <main>
        <LatestProducts/>
        <Route path="/" component={Home} exact />
        <Route path="/product/:id" component={ProductDetails} />
      </main>
      <footer>
        <Footer/>
      </footer>
    </Router>
  );
}

export default App;
