import React, { useEffect } from 'react'
import { Link, useRouteError } from 'react-router-dom'
import styles from '../css/404.module.css'

const Error404 = () => {
  const error = useRouteError();
  console.error(error)
  
  useEffect(() => {
    document.title = `Kasa - Error 404`;
  },[]);
  
  return (
    <div id={styles.page404}>
      <h1 className={styles.error404}>404</h1>
      <p className={styles.sentence404}>Oups! La page que vous demandez n'existe pas.</p>
      <Link className={styles.link404} to="/">Retourner sur la page d’accueil</Link> 
    </div>
  )
}

export default Error404