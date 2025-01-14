import "./App.css";
import Movies from "./components/movies";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/NotFound";
import NavBar from "./components/NavBar";
import MovieForm from "./components/MovieForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <>
        <NavBar />
        <main className="container">
          <Routes>
            <Route path='/movies/:id' element={<MovieForm />} />
            <Route path='/' element={<Movies />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </>
    </BrowserRouter>
  );
}

export default App;
