import axios from "axios";
import { FilmContext, FilmProvider } from "./contexts/FilmContext";
import HomePage from "./pages/HomePage";

function App() {


  return (
    <>
    <FilmProvider>
      <HomePage />
    </FilmProvider>
    </>
  )
}

export default App
