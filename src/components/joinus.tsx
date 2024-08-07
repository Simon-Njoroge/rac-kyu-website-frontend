import Join_us from '../assets/join_us_today.avif'
const Joinus=()=>{
    return(
        <>
          <div className="mt-10 relative">
                <img src={Join_us} alt="" className="w-full h-56" />
                <button className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 rounded-md border-orange-600 bg-pink-600 text-white px-4 py-2 hover:bg-transparent hover:border-pink-600">Join us Today</button>
            </div>
        </>
    )
}
export default Joinus