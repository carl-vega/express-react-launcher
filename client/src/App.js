// import './App.css';
// package imports
import { Routes, Route } from "react-router-dom";
// pages directory imports
import Home from "./pages/Home";
import Message from "./pages/Message"
import Projects from "./pages/Projects"
import Resume from "./pages/Resume"
// component directory imports
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="message" element={<Message />} />
          <Route path="projects" element={<Projects />} />
          <Route path="resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
