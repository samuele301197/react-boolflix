import axios from "axios";
import { createContext, useEffect, useState } from "react";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;



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
        .get(`${apiUrl}search/movie?api_key=${apiKey}&query=${search}`)
        .then((resp) => {
            setFilm(resp.data.results);
            console.log(resp.data.results);           
        });

        axios.get(`${apiUrl}search/tv?api_key=${apiKey}&query=${search}`)
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
