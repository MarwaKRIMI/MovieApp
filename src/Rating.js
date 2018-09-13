import React from 'react'
import './MovieApp.css'

const Rating = ({count, onChangeRating = () => {}}) => {
    let starsHtml = []
    for(let i = 0; i < 5; i++) {
        if(i < count) {
            starsHtml.push(<span  className='nejmam3abya'onClick={() => onChangeRating(i+1)} key={i}>★</span>)
        }
        else {
            starsHtml.push(<span className='nejmamfargha' onClick={() => onChangeRating(i+1)} key={i}>☆</span>)
        }
    }
    return (
        <div>{starsHtml}</div>
    )
}
export default Rating