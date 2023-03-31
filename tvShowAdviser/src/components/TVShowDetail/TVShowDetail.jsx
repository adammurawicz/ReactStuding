import s from './TVShowDetail.module.css'
import FiveStarRating from '../FiveStarRating/FiveStarRating'

function TVShowDetail ({ tvShow }) {
    const rating = tvShow.vote_average /2
    return (
        <div>
            <div className={s.title}>{tvShow.name}</div>

            <div className={s.rating_container}>{tvShow.vote_average /2 }
                <FiveStarRating rating={rating}></FiveStarRating>
                <span className={s.rating}>{}/5</span>
            </div>
            <div className={s.overview}>{tvShow.overview}</div>
        </div>
    )
}

export default TVShowDetail