import axios from 'axios';
import { api } from '../home';
import { useState, useEffect } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { FadeLoader } from 'react-spinners';

interface Tevent {
    id: number;
    poster: string;
    description: string;
}

const Manageevents = () => {
    const [events, setEvents] = useState<Tevent[]>([]);
    const [editEvent, setEditEvent] = useState<Tevent | null>(null); // State to handle the event being edited

    const fetcheventdata = async () => {
        try {
            const res = await axios.get(`${api}/allevents`);
            setEvents(res.data);
        } catch (error) {
            console.error("failed to load the events", error);
        }
    };

    useEffect(() => {
        fetcheventdata();
    }, []);

    const handleEdelete = async (id: number) => {
        try {
            await axios.delete(`${api}/deleteevent/${id}`);
            setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
        } catch (error) {
            console.error("failed to delete event", error);
        }
    };

    const handleEdit = (event: Tevent) => {
        setEditEvent(event); // Set the event to be edited
    };

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (editEvent) {
            try {
                await axios.put(`${api}/updateevent/${editEvent.id}`, editEvent);
                setEvents(prevEvents =>
                    prevEvents.map(event => event.id === editEvent.id ? editEvent : event)
                );
                setEditEvent(null); 
            } catch (error) {
                console.error("Failed to update event", error);
            }
        }
    };

    return (
        <>
            <div className="w-full overflow-scroll max-h-screen pl-2 pt-5">
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
                            {events.length > 0 ? (
                                events.map((event: Tevent) => (
                                    <tr key={event.id}>
                                        <th>{event.id}</th>
                                        <td><img src={event.poster} alt="" className="w-12 h-12" /></td>
                                        <td>{event.description}</td>
                                        <td>
                                            <button
                                                className="text-blue-500 hover:text-blue-700"
                                                onClick={() => handleEdit(event)}
                                            >
                                                <FaEdit />
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                className="text-red-500 hover:text-red-700"
                                                onClick={() => handleEdelete(event.id)}
                                            >
                                                <FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <div className="flex gap-5 justify-center items-center w-full mb-2">
                                    <FadeLoader color="#EC4899" />
                                    <p>Loading events data...</p>
                                </div>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Update Form */}
                {editEvent && (
                    <div className="mt-5 p-4 bg-gray-100 rounded-md">
                        <h3 className="text-xl font-bold mb-3">Update Event</h3>
                        <form onSubmit={handleUpdate}>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">Poster URL</label>
                                <input
                                    type="text"
                                    value={editEvent.poster}
                                    onChange={e => setEditEvent({ ...editEvent, poster: e.target.value })}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="mb-3">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    value={editEvent.description}
                                    onChange={e => setEditEvent({ ...editEvent, description: e.target.value })}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                                >
                                    Update
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setEditEvent(null)} // Close the form without saving
                                    className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </>
    );
};

export default Manageevents;
