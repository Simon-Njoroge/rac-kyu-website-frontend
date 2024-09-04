import axios from "axios";
import { useState, useEffect } from "react";
import { api } from './home';
import { FadeLoader } from "react-spinners";
const Presidents = () => {
  const [president, setPresident] = useState<string[] | any[]>([]);

  const fetchPresidents = () => {
    axios.get(`${api}/allpresidents`)
      .then(res => setPresident(res.data))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchPresidents();
  }, []);

  return (
    <>
      <div className="mt-20 px-4 md:px-10">
        <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl">
          Council of Presidents from 2015 till now
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 px-4 md:px-10">
        {
         president.length >0? (president && president.map((pres: any) => (
            <div key={pres.id} className="text-center rounded-md cursor-pointer transition-transform duration-700 hover:rotate-360 shadow-md shadow-black">
              <img src={pres.image} alt="" className="w-full h-48 object-cover rounded-t-md" />
              <div className="p-4 bg-white rounded-b-md">
                <p className="text-xl font-bold">{pres.president_name}</p>
                <p className="text-blue-500">{pres.year}</p>
                <p className="text-blue-700 mt-2">Learn more</p>
              </div>
            </div>
          ))):(
            <div className="w-full items-center justify-center gap-5 flex">
              <FadeLoader  color="#ff007f" />
              
              <p className="mt-3">loading presidents...</p>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Presidents;
