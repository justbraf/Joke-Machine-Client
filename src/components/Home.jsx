import React from 'react'
import { Link } from 'react-router'

const Home = () => {
    return (
        <>
            {/* A simple component to represent the home page */}
            <div className='text-3xl text-rose-300'>Home Page</div>
            {/* Links are created using the Link component where the path is specified with the to attribute */}
            {/* <p className='text-xl my-2'><Link to="/jokes" className='text-slate-500'>Click here</Link> to see all jokes</p> */}
            {/* <p className='text-xl my-2'><Link to="/joke/new" className='text-slate-500'>Click here</Link> to add a joke</p> */}
            <Link to="/jokes" className="group inline-block rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden" href="#">
                <span className="block rounded-xs bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">View All Jokes</span>
            </Link>

            {/* Pill Button */}
            <Link to="/joke/new" className="group inline-block rounded-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden" href="#">
                <span className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">Add New Joke</span>
            </Link>

        </>
    )
}

export default Home