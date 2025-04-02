import React from 'react'
import ViewCard from './ViewCard'
import { useParams } from 'react-router'

// Retrieve a single joke from the database specified by its ID
const GetJoke = () => {
    // Access the ID of the joke from the URL
    let myJID = useParams();
    return (
        <>
            <div>Viewing Joke</div>
            {myJID.jid}
            <ViewCard />
        </>
    )
}

export default GetJoke