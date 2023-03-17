import './App.css';
import Contact from './components/Contact';
import Home from './components/Home';
import About from './components/About';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
  } from "react-router-dom";

function App() {

  return (
    <div>
      <h1>Welcome to my router</h1>
    <BrowserRouter>
<Link to="/">Home</Link>{' '}
<Link to="/about">About</Link>{' '}
<Link to="/contact">Contact</Link>{' '}
<Routes>
<Route exact path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>
    
    </div>
  );
}

export default App;
