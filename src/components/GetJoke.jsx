import React, { useEffect, useState } from 'react'
import ViewCard from './ViewCard'
import { useParams } from 'react-router'

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


    return (
        <>
            {myJoke.id ?
                <ViewCard jid={myJoke.id} joke={myJoke.joke} />
                :
                <div className='text-xl'>Loading Joke</div>
            }
        </>
    )
}

export default GetJoke