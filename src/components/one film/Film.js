import {Link} from "react-router-dom";

export default function Film({item}) {

    return (
        <div>
            <Link to={'/movies/' + item.id}>{item.title}<br/>
                <img className="collection" src={'https://image.tmdb.org/t/p/w500' + item.poster_path} alt=""/>
            </Link>
        </div>
    );
}

