import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Section/Header";
import Signin from "./Pages/Signin";
import Video from "./Pages/Video/Video";
import GameDetails from "./Pages/GameDetails/GameDetails";
import About from "./Pages/About/About";
import Footer from "./Section/Footer";
import Contact from "./Pages/Contact/Contact";
import FQS from "./Pages/FQS/FQS";

function App() {
  return (
    <Router>
      <div className="w-[100vw] min-h-[100vh] no-scrollbar flex flex-col items-center justify-between overflow-x-hidden bg-mainBackground ">
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/:name" element={<Video />} />
          <Route path="/about" element={<About />} />
          <Route path="/fqs" element={<FQS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gameDetails/:name/:id" element={<GameDetails />} />
        </Routes>
        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
