import React from 'react'
import { useParams } from 'react-router-dom'

const Accomodation = () => {
  const {logementId} = useParams()
  return (
    <div>accomodation {logementId} </div>
  )
}

export default Accomodation