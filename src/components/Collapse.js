import React, { useState } from 'react'
import styles from '../App.module.css'
import chevron_down from '../images/chevron_down.svg'

const Collapse = ({title, text, list }) => {

    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(!active)
    }

    return (
        <div className={styles.collapse}>
            <header onClick={handleClick} className={styles.collapse_header}>
                <span>{title}</span>
                <img 
                    className={active ? styles.collapse_icon_active : undefined} 
                    src={chevron_down} 
                    alt='icon dépliant fermé'
                />
            </header>
            <div className={!active ? styles.collapse_content : styles.collapse_content +" "+ styles.collapse_content_active  }>
                <p>{text && text }</p>
                <ul className={styles.collapse_list}>
                    {list && list.map((equipement,i)=>{
                        return <li key={i}>{equipement}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Collapse