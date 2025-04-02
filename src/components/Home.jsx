import React from 'react'
import { Link } from 'react-router'

const Home = () => {
    return (
        <>
            {/* A simple component to represent the home page */}
            <div className='text-3xl text-rose-300'>Home Page</div>
            {/* Links are created using the Link component where the path is specified with the to attribute */}
            <p className='text-xl my-2'><Link to="/jokes" className='text-slate-500'>Click here</Link> to see all jokes</p>
        </>
    )
}

export default Home