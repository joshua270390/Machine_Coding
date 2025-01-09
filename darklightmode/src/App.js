// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Component/Layout/Layout";
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import NoPage from "./Component/NoPage/NoPage";
import { ThemeProvider } from './theme-context';

function App() {
  return (
    <ThemeProvider>
    <BrowserRouter>
      <Routes>
        
          <Route exact path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
