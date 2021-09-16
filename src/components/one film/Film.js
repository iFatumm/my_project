import {Link} from "react-router-dom";

export default function Film({item}) {

    return (
        <div>
              <Link to={'/movies/' + item.id}>{item.id} details</Link>
        </div>
    );
}

