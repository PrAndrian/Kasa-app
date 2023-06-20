import React from 'react'
import styles from '../css/Rating.module.css'
import start_up from '../images/start_up.svg'
import start_down from '../images/start_down.svg' 
import PropTypes from 'prop-types';

const Rating = ({rating}) => {
    const ratingNumber = Number(rating)
    return (
        <div className={styles.star_rating}>
            {[...Array(5)].map((star,i) => {   
                if(i <  ratingNumber){
                    return <img key={i} className={styles.star} src={start_up} alt="note_étoilé"/>
                }     
                else{
                    return <img key={i} className={styles.star} src={start_down} alt="note_étoilé"/>
                }
            })}
        </div>
    )
}

Rating.propTypes = {
    rating : PropTypes.string,
};

export default Rating