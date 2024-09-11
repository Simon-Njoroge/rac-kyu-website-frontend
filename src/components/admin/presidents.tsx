import { api } from '../home';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface Prez {
  id: number;
  president_name: string;
  year: string;
  image: string;
}

const Managepresidents = () => {
  const [presidents, Fetchpresidents] = useState<Prez[]>([]);

  const fetchpresidentdata = async () => {
    await axios.get(`${api}/allpresidents`)
      .then(res => Fetchpresidents(res.data))
      .catch(error => console.log("Error loading the presidents", error));
  }

  useEffect(() => {
    fetchpresidentdata();
  }, []);

  return (
    <>
      <div className="w-full overflow-scroll max-h-screen pl-2 pt-5">
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* head */}
            <thead>
              <tr>
                <th>ID</th>
                <th>President Name</th>
                <th>Year</th>
                <th>Image</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                presidents.length > 0 ? (
                  presidents.map((pres: Prez) => (
                    <tr key={pres.id}>
                      <th>{pres.id}</th>
                      <td>{pres.president_name}</td>
                      <td>{pres.year}</td>
                      <td><img src={pres.image} alt={pres.president_name} className="w-12 h-12 object-cover rounded-md" /></td>
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
                    <td colSpan={6} className="text-center">No data available</td>
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

export default Managepresidents;
