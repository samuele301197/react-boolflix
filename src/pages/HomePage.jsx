import { useContext } from "react";
import { FilmContext } from "../contexts/FilmContext";


const HomePage = () => {
    const { film, series, input, setInput, handleSubmit} = useContext(FilmContext)

    return (
        <div>
            <form
         onSubmit={handleSubmit}>
            <input type="text"
            value={input}
            placeholder="Cerca un film..."
            onChange={(e) => setInput(e.target.value)} />
            <button type="submit">Cerca</button>
         </form>

         <ul>
            {film.map((curFilm) => (
                <li key={curFilm.id}>
                    <h4>Titolo</h4> {curFilm.title}
                     <h5>Titolo originale:</h5>{curFilm.original_title}
                     <img src={`https://image.tmdb.org/t/p/w342${curFilm.poster_path}`}
                     alt={curFilm.name} />
                    <p>Lingua:  {curFilm.original_language}</p>
                    <p>Voto: {'★'.repeat(Math.round(curFilm.vote_average / 2)) +
                        '☆'.repeat(5 - Math.round(curFilm.vote_average / 2))}</p>
                </li>
            ))}
            {series.map((curSerie) => (
                <li key={curSerie.id}>
                    <h4>Titolo</h4> {curSerie.name}
                    <img src={`https://image.tmdb.org/t/p/w342${curSerie.poster_path}`}
                     alt={curSerie.name} />
                    <h5>Titolo originale:</h5>{curSerie.original_name}
                    <p>Lingua:  {curSerie.original_language}</p>
                    <p>Voto: {'★'.repeat(Math.round(curSerie.vote_average / 2)) +
                        '☆'.repeat(5 - Math.round(curSerie.vote_average / 2))}</p>
                </li>
                ))}      
         </ul>
        </div>        
    );
};


export default HomePage;