import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const logementId = 'testId'
  return (
    <div>
        This is the home page
        <h2>Liste de logements</h2>
        <Link to={`/fiche-logement/${logementId}`}>Lien logement</Link>
    </div>
  )
}

export default Home