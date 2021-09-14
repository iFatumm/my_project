import Films from "./components/films/Films";
import {useEffect, useState} from "react";
import {getFilms} from "./services/api";


export default function App() {

    const [films, setFilms] = useState([]);
    //
    // useEffect(()=> {
    //     getFilms().then(value => setFilms(
    //         console.log(value)
    //     ))
    // },[])
    useEffect(()=> {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=a296ef82c928c2bafbb589fa52f17cce&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
            .then(value => value.json())
            .then(response => {
                console.log(response)
                setFilms(response)
            })
    },[])

    return (
        <div>
            {
                films.map(value => <div>{value.id}</div>)}</div>
    );
}