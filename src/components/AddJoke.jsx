import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const AddJoke = () => {
    const goBack = useNavigate()
    const [formData, setFormData] = useState({})
    const [formErrorData, setFormErrorData] = useState({})
    const ERRORSTYLE = "border-red-700 border-2 " 

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.joke) {
            setFormErrorData({
                ...formErrorData,
                joke: ERRORSTYLE
            })
            return
        }
        if (!formData.answer) {
            setFormErrorData({
                ...formErrorData,
                answer: ERRORSTYLE
            })
            return
        }
        if (!formData.jokeImage) {
            setFormErrorData({
                ...formErrorData,
                jokeImage: ERRORSTYLE
            })
            return
        }
        const dataReq = new Request(
            'http://localhost:3000/new',
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify(formData)
            })
        fetch(dataReq)
            .then(resp => resp.json())
            .then(data => {
                data.error && alert(data.error)
                goBack(-1)
            })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
        setFormErrorData({
            ...formErrorData,
            [e.target.id]: ""
        })
    }

    const handleGoBack = () => {
        goBack(-1)
    }

    return (
        <>
            <div className='w-md mt-5 p-8 border-2 border-indigo-600 rounded-lg'>
                <form method='POST'>
                    <div className='my-4'>
                        <label htmlFor="Joke" className="relative">
                            <input
                                type="text"
                                id="joke"
                                placeholder=""
                                className={formErrorData.joke ? formErrorData.joke + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Joke
                            </span>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="Answer" className="relative">
                            <input
                                type="text"
                                id="answer"
                                placeholder=""
                                className={formErrorData.answer ? formErrorData.answer + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Answer
                            </span>
                        </label>
                    </div>
                    <div className='my-4'>
                        <label htmlFor="JokeImage" className="relative">
                            <input
                                type="text"
                                id="jokeImage"
                                placeholder=""
                                className={formErrorData.jokeImage ? formErrorData.jokeImage + "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm" : "peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"}
                                onChange={handleChange}
                            />

                            <span
                                className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                            >
                                Image
                            </span>
                        </label>
                    </div>
                    <div className='grid grid-cols-2'>
                        <button className="group inline-block rounded-sm bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden" type='reset' onClick={handleGoBack}>
                            <span className="block rounded-xs bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">Cancel</span>
                        </button>
                        <button className="group inline-block rounded-sm bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden" type='submit' onClick={handleSubmit}>
                            <span className="block rounded-xs bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent">Add a New Joke</span>
                        </button>
                    </div>
                </form>
            </div >
        </>
    )
}

export default AddJoke