import React, { useEffect, useState } from 'react'

const GetAllJokes = () => {

    const [allJokes, SetAllJokes] = useState({})
    useEffect(() => {
        const dataReq = new Request(
            'http://localhost:3000/jokes', {
            headers: {
                "content-type": "application/json",
            }
        }
        )
        fetch(dataReq)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                SetAllJokes(data)
            })
            .catch(err => console.error(err))
    }, [])
    return (
        <>
            <div>GetAllJokes</div>
            {allJokes[0] ?
                allJokes.map(elem => {
                    return(
                    <p key={elem.id}>{elem.joke}</p>
                    )
                })
                :
                <p className='text-9xl'>Loading...</p>
            }
        </>
    )
}

export default GetAllJokes