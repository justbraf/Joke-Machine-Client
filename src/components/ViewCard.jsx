import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'

// Component for viewing a single joke that accepts two children props
const ViewCard = ({ jid, joke }) => {
    // Create a URL for the joke beign displayed
    let newPath = "/joke/" + jid
    let goBack = useNavigate()

    let handleDelete = () => {
        // Delete object using joke id and http delete method
        const dataReq = new Request('http://localhost:3000/remove/id/' + jid,
            {
                method: "DELETE",
                headers: {
                    "content-type": "application/json",
                }
            })

        fetch(dataReq)
            .then(resp => resp.json())
            .then(data => {
                alert(jid)
                data.error ? alert(data.error) : alert(data.message)
                
                goBack(-1)
            })
            .catch(err => alert("error"))
    }

    return (
        <Link to={newPath} className="group relative block h-64 sm:h-80 lg:h-96">
            <span className="absolute inset-0 border-2 border-dashed border-black"></span>
            <div className="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
                <div className="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-10 sm:size-12"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    {/* Display the contents of the joke variable by enclosing it in curly braces */}
                    <h2 className="mt-4 text-xl font-medium sm:text-2xl">{joke}</h2>
                </div>
                <div className="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
                    <h3 className="mt-4 text-xl font-medium sm:text-2xl">{joke}</h3>
                    <p className="mt-4 text-sm sm:text-base">Joke ID: {jid}</p>
                    <p className="mt-8 font-bold"><i className="fa-solid fa-expand hover:text-2xl"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-file-pen text-green-600 hover:text-2xl"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i className="fa-solid fa-trash text-red-600 hover:text-2xl" onClick={handleDelete}></i></p>
                </div>
            </div>
        </Link>

    )
}

export default ViewCard