import moviesJSON from '../../assets/data/db.json';
import noImg from '../../assets/img/no-movie.png'
import './index.scss'

const Homepage =() =>{

    console.log(moviesJSON);

    const movies = moviesJSON.movies;

    return(
        <div className='homepage'>
            <p>Voici une liste des films disponnible sur notre site :</p>
        
            <div className='cards'>
                {movies.map((movie, i)=>{

                    if(movie.posterUrl)

                    return(
                        <a href={"/movie?id=" + i} className="card">
                            <h2 key={"title" + i}>{movie.title}</h2>
                            <img key={"image" + 1 } src={movie.posterUrl}
                                onError={(e) => {
                                e.target.onerror = null; // Prevents an infinite loop of fallback images
                                e.target.src = noImg;
                                }} />
                                <p>{movie.plot}</p>
                        </a>
                    )
                })}
            </div>
        </div>
    );
};

export default Homepage;