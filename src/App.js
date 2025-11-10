import logo from './logo.svg';
import './App.css';
import './style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Component/header';
import Footer from './Component/footer';
import Home from './pages/home';
import About from './pages/about';
import Service from './pages/service';
import Contact from './pages/contact';
import Blog from './pages/blog';
import Products from "./pages/products";
import Singlepost from "./pages/singlepost";
import Singleproduct from "./pages/singleproduct";
import Managepost from "./pages/managepost";
 

function App() {
  return (
    <div className="App">

      <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog/:id" element={<Singlepost />} />
        <Route path="/product/:id" element={<Singleproduct />} />
         <Route path="/managepost" element={<Managepost />} />
      </Routes>
      
       <Footer />
    </Router>
   

    </div>
  );
}

export default App;
