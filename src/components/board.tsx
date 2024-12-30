import axios from "axios";
import { useState, useEffect } from "react";
import { api } from "./home";
import { Tboard } from "./alltypes";
import { Link } from "react-router-dom";
function Board() {
  const [board, setBoard] = useState<Tboard[]>([]);

  const Fetchboard = async () => {
    try {
      const response = await axios.get(`${api}/api/all/board`);
      setBoard(response.data);
    } catch (error) {
      console.error("failed to fetch", error);
    }
  };

  useEffect(() => {
    Fetchboard();
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        <div className="text-center mt-10">
          <h1 className="text-3xl font-bold text-white bg-pink-600 py-5">
            Board
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 py-8">
          {board.length > 0 ? (
            board.map((boardmember) => (
              <div
                key={boardmember.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
              >
                <img
                  src={boardmember.Image}
                  alt={boardmember.Name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <p className="text-lg font-semibold text-white">
                    {boardmember.Name}
                  </p>
                  <p className="text-pink-700 font-bold mt-2">
                    {boardmember.Docket.toLocaleUpperCase()}
                  </p>
                  <p className="text-white">{boardmember.Rotary_id}</p>
                  <Link
                    to={`/Bmlearnmore/${boardmember.id}/?query=${boardmember.Name}`}
                    className="inline-block mt-4 text-pink-600 hover:underline"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700 font-semibold">
              No board members found.
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Board;
