import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Header } from "./components/Header/Header.jsx";
import { Home } from "./components/Home/Home";
import  About  from "./components/About/About";
import { Services } from "./components/Services/Services";
import { Reviews } from "./components/Reviews/Reviews";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();
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
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={user ? <Dashboard /> : <Navigate to="/login" />}
            />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
