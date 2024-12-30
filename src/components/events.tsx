import { api } from './home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FadeLoader } from 'react-spinners';
import { Tevent } from './alltypes';

const Events = () => {
  const [events, setEvents] = useState<Tevent[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const res = await axios.get(`${api}/api/all/events`);
      setEvents(res.data);
    } catch (error) {
      console.error("Error fetching the events", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="mx-0 md:mx-0 mt-10 bg-gray-100">
      {/* Heading */}
      <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl md:text-2xl  shadow-lg">
        Upcoming Events
      </p>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
        {loading ? (
          // Loader
          <div className="flex gap-5 justify-center items-center w-full mb-2 col-span-full">
            <FadeLoader color="#EC4899" />
            <p className="text-gray-500 text-lg">Loading events...</p>
          </div>
        ) : events.length > 0 ? (
          events.map((event: Tevent) => (
            <div
              key={event.id}
              className="relative bg-gray-800 mb-2 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out overflow-hidden"
            >
              {/* Event Image */}
              <div className="w-full aspect-w-16 aspect-h-9">
                <img
                  src={event.Event_Image}
                  alt="Event Poster"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Event Details */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-bold text-whitetruncate">
                  {event.Event_Name}
                </h3>
                <p className="text-sm text-white font-medium">
                  Organized By: <span className="font-normal">{event.Organised_By}</span>
                </p>
                <p className="text-sm text-white font-medium">
                  Location: <span className="font-normal">{event.Location}</span>
                </p>
                <p className="text-sm text-white truncate">{event.Description}</p>
                <p className="text-sm text-pink-600 font-semibold">
                  Date: <span className="font-normal">{new Date(event.Date).toLocaleDateString()}</span>
                </p>
              </div>
            </div>
          ))
        ) : (
          // No Events Message
          <div className="flex justify-center items-center col-span-full">
            <p className="text-gray-500 text-lg">No events available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
