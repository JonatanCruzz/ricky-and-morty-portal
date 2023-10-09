import { useEffect, useState } from "react"
import axios from 'axios'
import { chracterStatus } from '../constants/resident.js'

export const ResidentCard = ({ residentEndpoint }) => {
    const [resident, setResident] = useState(null)

    useEffect(() => {
        axios.get(residentEndpoint)
            .then(({ data }) => setResident(data))
            .catch((err) => console.log(err))

    }, [])

    return (
        <article>

            <header className="relative">
                {/* image card */}
                <img className='border-2 border-green-300' src={resident?.image} alt="" />

                {/* status */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 
                text-white px-4 py-1 rounded-md flex items-center gap-2 border-2 border-green-300">
                    <div className={`h-3 w-3 ${chracterStatus[resident?.status]} rounded-full `}></div>
                    <span>{resident?.status}</span>
                </div>

            </header>
            <div className="border-2 border-green-300">
                {/* resident name */}
                <h4 className="text-2xl text-white font-bold mt-3 ml-3 mr-3">{resident?.name}</h4> <hr />

                {/* additional info of resident */}
                <ul className="text-white m-3 space-y-3">
                    <li><span className="span-card-container">Species:</span> {resident?.species}</li>
                    <li><span className="span-card-container">Origin:</span> {resident?.origin.name}</li>
                    <li><span className="span-card-container">Times appear:</span> {resident?.episode.length}</li>
                </ul>
            </div>

        </article>
    )
}

export default ResidentCard