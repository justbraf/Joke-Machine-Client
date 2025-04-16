import React, { useEffect, useState } from 'react'
import ViewCard from './ViewCard'
import { useNavigate, useParams } from 'react-router'

// Retrieve a single joke from the database specified by its ID
const GetJoke = () => {
    // Access the ID of the joke from the URL
    let myJID = useParams();

    // state variable to hold the fetched joke
    const [myJoke, setMyJoke] = useState({})

    // Fetch data for the specific joke from the API.
    useEffect(() => {
        const dataReq = new Request(
            'http://localhost:3000/joke/' + myJID.jid,
            {
                // method: "GET",
                headers: {
                    "content-type": "application/json",
                }
            })

        fetch(dataReq)
            .then(resp => resp.json())
            .then(data => {
                setMyJoke(data)
            })
    }, [])

    // React Router useNavigate method allows the implemenation of a back button
    let goBack = useNavigate();

    return (
        <>
            {myJoke.id ?
                <>
                    {/* The button has a click event that runs an anonymous function executing a navigation to the previous page */}
                    <button onClick={() => goBack(-1)} className='cursor-pointer my-3'>Go Back</button>
                    <div className='flex flex-row justify-center'>
                    <div className='basis-xl'>
                        <ViewCard jid={myJoke.id} joke={myJoke.joke} answer={myJoke.answer} options={true}/>
                    </div>
                    </div>
                </>
                :
                <div className='text-xl'>Loading Joke</div>
            }
        </>
    )
}

export default GetJoke