import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div style={{marginTop:'30%'}}>

        <h1>Error404</h1>

        <h5>The page is not available <Link  style={{ textDecoration:'none'}} to ='/'>Please go back to homepage</Link></h5>
        
    </div>
  )
}

export default Error404