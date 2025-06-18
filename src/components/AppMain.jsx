import { useContext } from "react";
import { FilmContext } from "../contexts/FilmContext";
import FlagsConverter from "../components/LanguageFlags";

const AppMain = () => {
    const { film, series } = useContext(FilmContext);

    return (
        <main>
            <div className="container my-4">
                <div className="row g-4">
                    {film.map((curFilm) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={curFilm.id}>
                            <div className="card h-100">
                                <img
                                    src={`https://image.tmdb.org/t/p/w342${curFilm.poster_path}`}
                                    className="card-img-top"
                                    alt={curFilm.title}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Titolo: {curFilm.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Titolo originale: {curFilm.original_title}
                                    </h6>
                                    <p className="card-text">
                                        Lingua: <FlagsConverter languageFlag={curFilm.original_language} />
                                    </p>
                                    <p className="card-text">
                                        Voto:
                                        {'★'.repeat(Math.round(curFilm.vote_average / 2)) +
                                            '☆'.repeat(5 - Math.round(curFilm.vote_average / 2))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="row g-4">
                    {series.map((curSerie) => (
                        <div className="col-sm-6 col-md-4 col-lg-3" key={curSerie.id}>
                            <div className="card h-100">
                                <img
                                    src={`https://image.tmdb.org/t/p/w342${curSerie.poster_path}`}
                                    className="card-img-top"
                                    alt={curSerie.title}
                                />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title">Titolo: {curSerie.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Titolo originale: {curSerie.original_title}
                                    </h6>
                                    <p className="card-text">
                                        Lingua: <FlagsConverter languageFlag={curSerie.original_language} />
                                    </p>
                                    <p className="card-text">
                                        Voto:
                                        {'★'.repeat(Math.round(curSerie.vote_average / 2)) +
                                            '☆'.repeat(5 - Math.round(curSerie.vote_average / 2))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default AppMain;
