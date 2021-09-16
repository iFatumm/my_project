import Films from "./components/films/Films";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import Film from "./components/one film/Film";
import FilmDetails from "./components/details/FilmDetails";


export default function App() {

    return (
        <Router>
            {/*<div><button><Link to={''}>one film</Link></button></div>*/}

            <Switch>
                <Redirect exact from={'/'} to={'/movies'}/>
                <Route path={'/movies/:id'} component={FilmDetails}/>
                <Route path={'/movies'} component={Films}/>
            </Switch>

        </Router>
    );
}