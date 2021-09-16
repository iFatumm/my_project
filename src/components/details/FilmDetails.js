import {useEffect, useState} from "react";
import {getFilm} from "../../services/api";
import { useParams} from "react-router-dom";

export default function FilmDetails() {

    const [film, setFilm] = useState({});
    const {id} = useParams()

    useEffect(() => {
        getFilm(id).then(value => setFilm(value))
    }, [id])
    return (
        <div>
            <div><b>{film.id} - {film.title}</b></div>
            <br/>
            {<img src={'https://image.tmdb.org/t/p/w500' + film.poster_path} alt=""/>}


        </div>
    );
}

// adult: false
// backdrop_path: "/849RDhbADVVnhtggR14dDBYejeN.jpg"
// genre_ids: (3) [14, 10749, 35]
// id: 593910
// original_language: "en"
// original_title: "Cinderella"
// overview: "Cinderella, an orphaned girl with an evil stepmother, has big dreams and with the help of her Fabulous Godmother, she perseveres to make them come true."
// popularity: 1085.945
// poster_path: "/clDFqATL4zcE7LzUwkrVj3zHvk7.jpg"
// release_date: "2021-09-03"
// title: "Cinderella"
// video: false
// vote_average: 6.8
// vote_count: 558