import axios from "axios";
import { createContext, useEffect, useState } from "react";



const FilmContext = createContext();
const FilmProvider = ({children}) => {
    const [film, setFilm] = useState([]);
    const [series, setSeries] = useState([]);
    const [search, setSearch] = useState("");
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearch(input);
    }

    useEffect(() => {
        axios
        .get(`https://api.themoviedb.org/3/search/movie?api_key=aa75aef72e7bba5e87dbbf76ba5bcb11&query=${search}`)
        .then((resp) => {
            setFilm(resp.data.results);
            console.log(resp.data.results);           
        });

        axios.get(`https://api.themoviedb.org/3/search/tv?api_key=aa75aef72e7bba5e87dbbf76ba5bcb11&query=${search}`)
        .then((resp) => {
            setSeries(resp.data.results);
            console.log(resp.data.results);
            
        })
    }, [search]);
    return (
        <FilmContext.Provider value = {{film,series, input, setInput, handleSubmit}}>
            {children}
        </FilmContext.Provider>
    );
};

export {FilmContext, FilmProvider};
