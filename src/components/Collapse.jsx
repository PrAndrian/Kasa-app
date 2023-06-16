import React, { useState } from 'react'
import styles from '../css/Collapse.module.css'
import chevron_down from '../images/chevron_down.svg'

const Collapse = ({title, text }) => {

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
                { typeof text === "string"? 
                    (<p>
                        {text && text}
                    </p>)
                :
                    (<p className={styles.equipement}>
                        {text && text.map((equipement)=>(equipement))}
                    </p>)
                }
            </div>
        </div>
    )
}

export default Collapse