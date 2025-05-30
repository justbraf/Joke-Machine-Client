import React, { useEffect, useState } from 'react'
import ViewCard from './ViewCard'
import { Link } from 'react-router'

// Retrieve all jokes from the database and display them
const GetAllJokes = () => {
    // Declare a state variable named allJokes that is immutable and initialized as an empty array
    // A function to update the state variable named SetAllJokes is also declared
    const [allJokes, SetAllJokes] = useState([])

    // useEffect function allows React to access data external from the app
    useEffect(() => {
        // Create a request object that is to be used with the Fetch API
        // Options like the HTTP Request method and content-type can be specified here
        const dataReq = new Request('http://localhost:3000/jokes',
            {
                // method: "GET",
                headers: {
                    "content-type": "application/json",
                }
            })

        // The Fetch method makes an asynchronous request based on the previously constructed request object
        fetch(dataReq)
            // Convert the initial response to a JSON object
            .then(resp => resp.json())
            // Update the state variable to the retireved JSON object
            .then(data => {
                SetAllJokes(data)
            })
            .catch(err => console.error(err))
    }, [])

    return (
        <>
            <div className='my-3'>
                {/* A link to the home page */}
                <Link to="/" className="group inline-block rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden">
                    <span className="block rounded-xs bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">Go Home</span>
                </Link>
            </div>
            {/* Does the state variable have a single index in its array? (how we check to see if there is data) */}
            {!allJokes[0] ?
                <p className='text-9xl'>Loading...</p>
                :
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                    {/* As we loop through every index in the array, store the current index in the variable elem.
                     Using elem JSX is returned according to the content outlined */}
                    {allJokes.map(elem => {
                        return (
                            // Since elem contains an object, the dot operator allows access to the keys of the object to access the data
                            // added the key for likes which is used to show the likes. If it doesn't exist, default it to zero
                            <ViewCard key={elem.id} jid={elem.id} joke={elem.joke} answer={elem.answer} jokeImage={elem.jokeImage && elem.jokeImage} likes={elem.likes ? elem.likes : 0} options={false} />
                        )
                    })}
                </div>
            }
        </>
    )
}

export default GetAllJokes