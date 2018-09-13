import React from 'react'
import './MovieApp.css'
import Rating from './Rating'

const MovieCard = (props) => {
    const {movie = {}} = props
    const {
        id='',
        title = '',
        year = '',
        image = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYrXbNlzCHSw2dbwTh-P0JJfTtsl5wfHzkg1dV_sf1FmpLR3TvGA',
        rating = 0
    } = movie
    return (
        <div className="movie-card">
            <div className="movie-rating"><Rating count={rating} /></div>
            <div
                className="movie-image"
                style={{
                backgroundImage:
                    `url('${image}')`
                }}
            />
            <div className="movie-description">{title} - {year}</div>
            </div>
    )
}
    

export default MovieCard