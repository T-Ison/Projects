import React from 'react'
import PropTypes from 'prop-types'


const Rating = ({ value, text, color }) => {
    return (
        <div className='rating'>
            <span>
                {/* turnery (if/else) for star rating */}
                <i style={{ color }}
                    className={
                        value >= 1 
                        ? 'fas fa-star' 
                        : value >= 0.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'}>
                </i>
            </span>
            <span>
                <i style={{ color }}
                    className={
                        value >= 2 
                        ? 'fas fa-star' 
                        : value >= 1.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'}>
                </i>
            </span>
            <span>
                <i style={{ color }}
                    className={
                        value >= 3 
                        ? 'fas fa-star' 
                        : value >= 2.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'}>
                </i>
            </span>
            <span>
                <i style={{ color }}
                    className={
                        value >= 4 
                        ? 'fas fa-star' 
                        : value >= 3.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'}>
                </i>
            </span>
            <span>
                <i style={{ color }}
                    className={
                        value >= 5 
                        ? 'fas fa-star' 
                        : value >= 4.5 
                        ? 'fas fa-star-half-alt' 
                        : 'far fa-star'}>
                </i>
            </span>
            {/* if text show it */}
            <span>{text && text}</span>
        </div>
    )
}

// setting default color for rating this is being passed into ^ this function
Rating.defaultProps = {
    color: '#f8e825'
}

// validations for front end value types
Rating.propTypes = {
    value: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    color: PropTypes.string
}

export default Rating
