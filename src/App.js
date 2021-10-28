import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Navbar from './Component/Navbar';
import Newslatter from "./Component/Newslatter";
import Footer from './Component/Footer';

function App() {
  return (
    <>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/contact" component={Contact} />
      </Switch>

      <Newslatter />
      <Footer />

    </>
  );
}

export default App;
