import {useEffect, useState} from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';
import icon from './img/icon.png';



export function Movies() {
    const {t, i18n} = useTranslation();
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);


            try {
                const {data: response} = await axios.get(`https://api.airtable.com/v0/appQXxHBBaLLaLeMj/movies_${i18n.language}?api_key=keyTietW0kIxFf4E8`);
                setMovies(response.records);
            } catch (error) {
                console.error(error.message);
            }

            setLoading(false);
        }

        fetchMovies();
    }, [i18n.language]);

    function search(e) {
        setSearchQuery(e.target.value);
    } 

    
    return (
        <div className="movies-wrapper">
            <div className="search">
                <input type="text" id="search" placeholder={t("search")} onInput={(e) => search(e)}/>
                <img className='searchimg' src={icon}></img>

            </div>
            <ul>
                <div className="img">
                    {movies.filter(movie => movie.fields.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1)
                        .sort((a, b) => (new Date(b.fields.date) - (new Date(a.fields.date))))
                        .map(movie => 
                    <div className='about-movie'>
                        <div className="column1">
                            <li className="movie-li">
                                <a className="movie-a" href={movie.fields.link} target="_blank">
                                    <img className="movie-images" src={movie.fields.image[0].url} alt={movie.fields.title}/>
                        
                                </a>
                            </li>
                        </div>
                        <div className="description">
                         <p>{t("name")}: {movie.fields.title}</p>  
                         <p>{t("release")}: {movie.fields.date}</p>
                         <p>{t("duration")}: {movie.fields.duration}</p>
                         <p>{t("description")}: {movie.fields.description}</p>
                         </div>
                    </div>
                    )}
               </div>
            </ul>
        </div>
    )
}
