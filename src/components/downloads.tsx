import axios from "axios";
import { useState, useEffect } from "react";
import { api } from "./home";
import { ClipLoader } from "react-spinners";
interface Tdownload {
  id: number;
  title: string;
  descrition: string;
  Link: string;
}

const Downloads = () => {
  const [Download, setDownload] = useState<Tdownload[]>([]);

  const Handleblogdata = async () => {
    try {
      const res = await axios.get(`${api}/alldownloads`);
      setDownload(res.data);
    } catch (error) {
      console.error("Failed to load downloads", error);
    }
  };

  useEffect(() => {
    Handleblogdata();
  }, []);

  return (
    <>
      <div>
        <p className="bg-pink-600 text-center h-20 flex items-center mt-20 mx-10 justify-center text-white font-bold text-xl">
          Downloads
        </p>
      </div>
      <div className="overflow-x-auto mx-10 mt-10">
        <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
          {/* Table Head */}
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-center">Options</th>
            </tr>
          </thead>
         
          <tbody className="text-gray-600 text-sm font-light">
            {Download.length > 0 ? (
              Download.map((down) => (
                <tr
                  key={down.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {down.title}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {down.descrition}
                  </td>
                  <td className="py-3 px-6 text-center">
                    <div className="flex item-center justify-center space-x-4">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        <a
                          href={down.Link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-blue-500 hover:bg-blue-700"
                        >
                          Open
                        </a>
                      </button>
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                        <a href={down.Link} download target="_blank" className="bg-green-500 hover:bg-green-700">
                          Download
                        </a>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div className="flex justify-center items-center h-screen">
              <ClipLoader  color="#ff007f" />
              <p>loading Downloads....</p>
            </div>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Downloads;
