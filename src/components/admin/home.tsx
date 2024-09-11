import { api } from '../home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Home {
  id: number;
  picture: string;
  description: string;
}

const Managehome = () => {
  const [home, FetchHome] = useState<Home[] | any[]>([]);

  const fetchhomedat = async () => {
    await axios.get(`${api}/allhomepic`)
      .then(res => FetchHome(res.data))
      .catch(error => console.error("failed to load home", error));
  };

  useEffect(() => {
    fetchhomedat();
  }, []);

  console.log(home);

  return (
    <>
      <div className="w-full overflow-x-auto pl-2 pt-5 max-h-screen">
        <div className="">
          <table className="table-auto w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Id</th>
                <th>Picture</th>
                <th>Description</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                home.length > 0 ? (
                  home.map((hom) => (
                    <tr key={hom.id}>
                      <th>{hom.id}</th>
                      <td>
                        <img src={hom.picture} alt="Home" className="w-20 h-20 object-cover rounded-md" />
                      </td>
                      <td>{hom.description}</td>
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
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center">No data available</td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Managehome;
