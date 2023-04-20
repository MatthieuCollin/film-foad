import './index.scss';
import {BiMoviePlay} from 'react-icons/bi'
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar = () =>{

    const location = useLocation();
    console.log(location.pathname);

    return(
        <div className="sidebar">
            <div className="logo">
                <BiMoviePlay></BiMoviePlay>
                <h1>
                    FILMPLASTIC
                </h1>
            </div>
            <nav>
               {location.pathname === "/" ? (<></>) : (<NavLink to="/">Retour a la page d'accueil</NavLink>)} 
            </nav>
        </div>
    )
}

export default Sidebar;