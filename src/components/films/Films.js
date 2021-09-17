import {useEffect, useState} from "react";
import {getFilms} from "../../services/api";
import Film from "../one film/Film";


export default function Films() {
    const [films, setFilms] = useState([]);

    useEffect(()=> {
        getFilms().then(({results}) => setFilms(results))
    },[])

    return (
        <div>
            {
                films.map(film=> <Film key={film.id} item={film}/>)
            }
        </div>
    );
}