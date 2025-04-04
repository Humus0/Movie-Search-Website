import "./CSS/App.css";
import Favs from "./pages/Favs";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import { MovieProvider } from "./contexts/MovieContext";
function App() {
  return (
    <>
      <MovieProvider>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favs" element={<Favs />} />
          </Routes>
        </main>
      </MovieProvider>
    </>
  );
}

export default App;
