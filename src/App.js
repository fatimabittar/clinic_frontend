import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./components/Home/Home";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { Reviews } from "./components/Reviews/Reviews";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
      <main className="main">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </div>
    
    
  );
}

export default App;
