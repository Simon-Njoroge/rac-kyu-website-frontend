import { api } from './home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';

interface TypeEvent {
  id: number;
  poster: string;
  description: string;
}

const Events = () => {
  const [events, setEvents] = useState<TypeEvent[]>([]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${api}/allevents`);
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching the events", error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="mx-4 md:mx-10 mt-20">
      <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl md:text-2xl">
        Upcoming Events
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {events.length > 0 ? (
          events.map((event: TypeEvent) => (
            <div
              key={event.id}
              className="relative bg-white rounded-lg shadow-md hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <div className="w-full aspect-w-16 aspect-h-9">
                <img src={event.poster} alt="Event Poster" className="object-cover w-full h-full rounded-t-lg" />
              </div>
              <div className="p-4">
                <p className="text-sm md:text-base">{event.description}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="flex gap-5 justify-center items-center w-full mb-2">
            <FadeLoader color="#EC4899" />
            <p>Loading events...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
