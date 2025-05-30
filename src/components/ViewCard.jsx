import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'
import LikesBar from './LikesBar'

// Component for viewing a single joke that accepts two children props
const ViewCard = ({ jid, joke, answer, jokeImage, likes, options }) => {
    // Create a state variable for the likes to update the screen without refereshing and store the retrieved in the state
    const [theLikes, setTheLikes] = useState(likes)

    // Create a URL for the joke beign displayed
    const newPath = "/joke/" + jid
    const editPath = "/edit/" + jid
    const delPath = "/remove/" + jid

    return (
        <div className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>
            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                    {jokeImage && <img src={jokeImage} alt={"image for joke " + jid} className='max-h-48 rounded-md' />}
                    {/* Display the contents of the joke variable by enclosing it in curly braces */}
                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">{joke}</h2>
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10 sm:size-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">{answer}</h3>
                    <p className="mt-4 text-sm sm:text-base">Joke ID: {jid}</p>
                    <div className="mt-8 font-bold">
                        {!options ?
                            <div className='flex flex-row gap-12'>
                                <Link to={newPath}>
                                    <i className="fa-solid fa-expand delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
                                </Link >
                                {/* Call the likes component with the props of jokeid, likes and the setter function for likes */}
                                <LikesBar likes={theLikes} setLikes={setTheLikes} jid={jid} />
                            </div>
                            :
                            <div className='grid grid-cols-4 gap-2'>
                                <Link to={editPath}>
                                    <i className="fa-solid fa-file-pen text-green-600 delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
                                </Link>
                                <Link to={delPath}>
                                    <i className="fa-solid fa-trash text-red-600 delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
                                </Link>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewCard