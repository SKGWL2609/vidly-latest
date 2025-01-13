import "./App.css";
import Movies from "./components/movies";
function App() {
  return (
    <>
      <main className="container">
        <h1 className="text-center">
          <i className="bi bi-film"></i> Vidly
        </h1>
        <Movies />
      </main>
    </>
  );
}

export default App;
