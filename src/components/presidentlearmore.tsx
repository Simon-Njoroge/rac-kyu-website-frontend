import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { api } from "./home";
import { TPresidents } from "./alltypes";

function Presidentlearnmore() {
  const { id } = useParams();
  const [president, setPresident] = useState<TPresidents[] | any[]>([]);

  const fetchPresidents = () => {
    axios
      .get(`${api}/api/all/president`)
      .then((res) => setPresident(res.data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchPresidents();
  }, []);

  const pres = president?.find((p) => p.id === Number(id));

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 mt-10">
      <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        {/* Image Section */}
        <div className="relative">
          <img
            src={pres?.President_Image}
            alt="President"
            className="w-full h-64 object-cover"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-50"></div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <h1 className="text-3xl font-semibold text-white mb-4">
            {pres?.President_Name}
          </h1>
          <p className="text-lg text-pink-600 mb-4">
            <strong>Year Started:</strong> {new Date(pres?.Year_Started).toLocaleDateString()}
          </p>
          <p className="text-lg text-pink-600 mb-4">
            <strong>Year Completed:</strong> {new Date(pres?.Year_Completed).toLocaleDateString()}
          </p>
          <p className="text-white">{pres?.Description}</p>
        </div>
      </div>
    </div>
  );
}

export default Presidentlearnmore;
