import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Upcoming = () => {
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    
    
    const getMovies = async () =>{
        try{
            const response= await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=546c72b99cf64514c2c03c7ef473011b&language=ko-KR`);
            setUpcomingMovies(response.data.results)
            /* console.log(response.data); */
            setLoading(false);
        }catch(err){
                console.error('Error : ', err);
                setLoading(false);
        }
    }
    useEffect(()=>{
        getMovies();
     }, [])

    const getRandomMovie = () =>{
        const randomIndex=Math.floor(Math.random() * upcomingMovies.length);
        return upcomingMovies[randomIndex]
    }
    const randomMovie=getRandomMovie();

    return (
        <div>
            {
                isLoading ? (<div>Loading...</div>) : (
                    <div className='upMovie'>
                        <div className="upBackImg">
                            <img src={`https://image.tmdb.org/t/p/w500/${randomMovie.backdrop_path}`} alt={randomMovie.title} />
                        </div>
                        <div className='upinfoWrap'>
                            <div className="upInfo">
                             <img src={`https://image.tmdb.org/t/p/w300/${randomMovie.poster_path}`} alt={randomMovie.title} />   
                            </div>
                            <div className="upinfoText">
                                <p className='upTitle'>{randomMovie.original_title}</p>                           
                                <p className='upRelease'>{randomMovie.release_date}</p>                           
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Upcoming;