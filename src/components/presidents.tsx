import axios from "axios";
import { useState, useEffect } from "react";
import { api } from './home';
import { FadeLoader } from "react-spinners";
import { TPresidents } from "./alltypes";
import { Link } from "react-router-dom";
const Presidents = () => {
  const [president, setPresident] = useState<TPresidents[] | any[]>([]);

  const fetchPresidents = () => {
    axios.get(`${api}/api/all/president`)
      .then(res => setPresident(res.data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchPresidents();
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        <div className="mt-10 px-0 md:px-0">
          <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl">
            Council of Presidents from 2015 till now
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 px-0 md:px-0 mb-2">
          {
            president.length > 0 ? (president && president.map((pres: any) => (
              <div key={pres.id} className="text-center rounded-md bg-gray-800 cursor-pointer transition-transform duration-700 hover:rotate-360 shadow-md shadow-black">
                <img src={pres.President_Image} alt="" className="w-full h-48 object-cover rounded-t-md" />
                <div className="p-4 bg-gray-800  rounded-b-md">
                  <p className="text-md font-bold text-white">President: {pres.President_Name}</p>
                  <p className="text-blue-500">{new Date(pres.Year_Started).getFullYear()}-{new Date(pres.Year_Completed).getFullYear()}</p>
                  <Link to={`/Plearnmore/${pres.id}/?query=${pres.President_Name}`}><p className="text-blue-700 mt-2">Learn more</p></Link>
                </div>
              </div>
            ))) : (
              <div className="w-full items-center justify-center gap-5 flex">
                <FadeLoader color="#ff007f" />

                <p className="mt-3">loading presidents...</p>
              </div>
            )
          }
        </div>
      </div>
    </>
  );
};

export default Presidents;
