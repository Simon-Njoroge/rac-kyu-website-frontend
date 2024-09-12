import axios from 'axios'
import { api } from '../home'
import { useState, useEffect } from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';
interface Tevent {
    id: number,
    poster: string,
    description: string
}
const Manageevents = () => {
    const [events, FetchEvents] = useState<Tevent[]>([])
    const fetcheventdata = async () => {
        await axios.get(`${api}/allevents`)
            .then(res => FetchEvents(res.data))
            .catch(error => console.error("failed to load the events", error))
    }
    useEffect(() => {
        fetcheventdata()
    }, [])
    return (
        <>
            <div className="w-full overflow-scroll  max-h-screen pl-2 pt-5">
                <div className="overflow-x-auto">
                    <table className="table">
                       
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Poster</th>
                                <th>Description</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                events.length > 0 ? (
                                    events && events.map((Devent: Tevent) => {
                                        return (
                                            <>
                                                <tr key={Devent.id}>
                                                    <th>{Devent.id}</th>
                                                    <td><img src={Devent.poster} alt="" className='w-12 h-12' /></td>
                                                    <td>{Devent.description}</td>
                                                    <td>
                                                        <button className="text-blue-500 hover:text-blue-700">
                                                            <FaEdit />
                                                        </button>
                                                    </td>
                                                    <td>
                                                        <button className="text-red-500 hover:text-red-700">
                                                            <FaTrash />
                                                        </button>
                                                    </td>
                                                </tr>
                                            </>
                                        )
                                    })
                                ) : (
                                    <div className="flex gap-5 justify-center items-center w-full mb-2">
                                    <FadeLoader color="#EC4899" />
                                    <p>Loading events data...</p>
                                  </div>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default Manageevents