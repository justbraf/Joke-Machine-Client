import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

const AddJoke = () => {
    const goBack = useNavigate()
    const [formData, setFormData] = useState({})

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.joke)
            return
        if (!formData.answer)
            return
        const dataReq = new Request(
            'http://localhost:3000/new',
            {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body:JSON.stringify(formData)
            })
            fetch(dataReq)
            .then(resp=>resp.json())
            .then(data=>{
                data.error ? alert(data.error) : alert(data.message)

                goBack(-1)
            })
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    return (
        <>
            <Link to={"/"}>Go Home</Link>
            <div>AddJoke</div>
            <form method='POST'>
                <label htmlFor="Joke" className="relative">
                    <input
                        type="text"
                        id="joke"
                        placeholder=""
                        className="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                        onChange={handleChange}
                    />

                    <span
                        className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                    >
                        Joke
                    </span>
                </label>
                <label htmlFor="Answer" className="relative">
                    <input
                        type="text"
                        id="answer"
                        placeholder=""
                        className="peer mt-0.5 w-full rounded border-gray-300 shadow-sm sm:text-sm"
                        onChange={handleChange}
                    />

                    <span
                        className="absolute inset-y-0 start-3 -translate-y-5 bg-white px-0.5 text-sm font-medium text-gray-700 transition-transform peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-5"
                    >
                        Answer
                    </span>
                </label>
                <button type='submit' onClick={handleSubmit}>Add a New Joke</button>
            </form>

        </>
    )
}

export default AddJoke