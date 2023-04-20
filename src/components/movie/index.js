import './index.scss'
import data from '../../assets/data/db.json'
import { useSearchParams } from 'react-router-dom'
import noImg from '../../assets/img/no-movie.png'

const Movie = () =>{

    const [searchParams, setSearchParams] = useSearchParams();


    const movie = data.movies[searchParams.get('id')]

    console.log(movie);

    return(
        <div class="movie">
            <h2 key="title">{movie.title}</h2>

            <img key="image" src={movie.posterUrl} onError={(e) => {
                e.target.onerror = null;
                e.target.src = noImg;
            }} />

            <p>{movie.plot}</p>

            <p>Date de sortie : {movie.year}</p>

            <p>Directeur : {movie.director}</p>
            
            <p>Acteur : {movie.actor}</p>

            <div class="genres">
                {movie.genres.map((genre) => {
                return (
                    <p>{genre}</p>
                )
                })}
            </div>
        </div>
    )
}

export default Movie