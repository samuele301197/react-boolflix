import { useContext } from "react";
import { FilmContext } from "../contexts/FilmContext";

const AppHeader = () => {
    const {input, setInput, handleSubmit} = useContext(FilmContext)
    return (

    <header className="navbar navbar-dark bg-dark px-3">
        <a className="navbar-brand text-danger" href="">BOOLFLIX</a>      
        <form className="d-flex"
        onSubmit={handleSubmit}>
            <input type="text"
             className="form-control me-2"
            value={input}
            placeholder="Cerca un film..."
            onChange={(e) => setInput(e.target.value)} />
            <button className="btn btn-danger mx-5" type="submit">Cerca</button>
        </form>
    </header>
    );
};

export default AppHeader;