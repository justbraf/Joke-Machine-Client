import React, { useEffect, useState } from 'react'

const GetAllJokes = () => {

    const [allJokes, SetAllJokes] = useState([])
    useEffect(() => {
        const dataReq = new Request(
            'http://localhost:3000/jokes', {
            // method: "GET",
            headers: {
                "content-type": "application/json",
            }
        }
        )
        fetch(dataReq)
            .then(resp => resp.json())
            .then(data => {
                SetAllJokes(data)
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <>
            <div>GetAllJokes</div>
            {!allJokes[0] ?
                <p className='text-9xl'>Loading...</p>
                :
                allJokes.map(elem => {
                    return (
                        <p 
                            className='focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900'
                        key={elem.id}>{elem.joke}</p>
                    )
                })
            }
        </>
    )
}

export default GetAllJokes