import React from 'react'

const LikesBar = ({ likes, setLikes, jid }) => {
    const handleThumbs = (e) => {
        // Update object's like field using joke id and http put method
        const dataReq = new Request('http://localhost:3000/rate/' + jid + '/' + e.target.id,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json",
                }
            })

        fetch(dataReq)
            .then(resp => resp.json())
            .then(data => {
                // Show errors if any
                data.error && alert(data.error)
                // Check if the update was successful (modifiedcount == 1)
                if (data.message.modifiedCount) {
                    // Update the state variable to match what should be stored in the database
                    if (e.target.id == "up")
                        setLikes(likes + 1)
                    else if (e.target.id == "down")
                        setLikes(likes - 1)
                }
            })
            .catch(err => alert("error"))
    }
    return (
        <div className='flex flex-row gap-6'>
            <div>{likes} Likes</div>
            <div>
                <i id='up' onClick={handleThumbs} className="fa-solid fa-thumbs-up cursor-pointer delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
            </div>
            <div>
                <i id='down' onClick={handleThumbs} className="fa-solid fa-thumbs-down cursor-pointer delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
            </div>
        </div>
    )
}

export default LikesBar