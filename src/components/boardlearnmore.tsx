import axios from "axios"
import { api } from "./home"
import { useState,useEffect } from "react"
import { Tboard } from "./alltypes"
import { useParams } from "react-router-dom"
function Boardlearnmore() {
    const {id}=useParams()
    const [board, setBoard] = useState<Tboard[]>([])
    const Fetchboard = async () => {
        try {
            const response = await axios.get(`${api}/api/all/board`)
            setBoard(response.data)
        }
        catch (error) {
            console.error('failed to fecth', error)
        }
    }

    useEffect(() => {
        Fetchboard()
    })
    const boardmember=board?.find((m)=>m.id === Number(id))
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 mt-10">
    <div className="max-w-3xl mx-auto bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img
          src={boardmember?.Image}
          alt="President"
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white opacity-50"></div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        <h1 className="text-3xl font-semibold text-white mb-4">
          {boardmember?.Name}
        </h1>
        <p className="text-lg text-white mb-4">
          <strong>Role:</strong> {boardmember?.Docket}
        </p>
        <p className="text-lg text-white mb-4">
          <strong>Rotary ID:</strong> {boardmember?.Rotary_id}
        </p>
        <p className="text-white">{boardmember?.Description}</p>
      </div>
    </div>
  </div>
  )
}

export default Boardlearnmore
