import React, { useState } from 'react'
import styles from '../App.module.css'
import chevron_down from '../images/chevron_down.svg'

const Collapse = ({description, equipments }) => {

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div onClick={handleClick} className={styles.collapse}>
            <header className={styles.collapse_header}>
                <span>Title</span>
                <img 
                    className={active ? styles.collapse_icon_active : undefined} 
                    src={chevron_down} 
                    alt='icon dépliant fermé'
                />
            </header>
            <div className={!active ? styles.collapse_content : styles.collapse_content +" "+ styles.collapse_content_active  }>
                <p>{description && description }</p>
                <ul className={styles.collapse_list}>
                    {equipments && equipments.map((equipement,i)=>{
                        return <li key={i}>{equipement}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Collapse