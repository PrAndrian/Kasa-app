import React from 'react'
import styles from '../css/Rating.module.css'
import start_up from '../images/start_up.svg'
import start_down from '../images/start_down.svg' 

const Rating = ({rating}) => {

    return (
        <div className={styles.star_rating}>
            {[...Array(5)].map((star,i) => {   
                if(i <  rating){
                    return <img key={i} className={styles.star} src={start_up} alt="note_étoilé"/>
                }     
                else{
                    return <img key={i} className={styles.star} src={start_down} alt="note_étoilé"/>
                }
            })}
        </div>
    )
}

export default Rating