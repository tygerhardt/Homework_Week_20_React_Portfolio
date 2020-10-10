import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './contents/Home';
import About from './contents/About';
import Portfolio from './contents/Portfolio';
import Contact from './contents/Contact';


function App() {
  return (
<Router>
<div className="App">
<Navbar />
{/* Route for Home.js contents */}
{/* Route for About.js contents */}
<Route path="/about">
<About />
</Route>
{/* Route for Portfolio.js contents */}
<Route path="/portfolio">
<Portfolio />
</Route>
{/* Route for Contact.js contents */}
<Route path="/contact">
<Contact />
</Route>
<Route path="/">
<Home />
</Route>
</div>
</Router>
    )
}
export default App;

