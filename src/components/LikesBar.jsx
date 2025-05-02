import React from 'react'

const LikesBar = ({ likes }) => {
    return (
        <div className='flex flex-row gap-6'>
            <div>{likes} Likes</div>
            <div>
                <i className="fa-solid fa-thumbs-up delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
            </div>
            <div>
                <i className="fa-solid fa-thumbs-down delay-150 duration-300 ease-in-out transistion-transform hover:scale-150"></i>
            </div>
        </div>
    )
}

export default LikesBar