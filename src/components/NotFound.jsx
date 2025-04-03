import React from 'react'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className=''>
        <h1 className='text-xl'>Error 404</h1>
        <h1 className='text-xl'>The page you're looking for doesn't exist.</h1>
        <Link to="/" className='text-xl'>Return to Home Page</Link>
    </div>
  )
}

export default NotFound