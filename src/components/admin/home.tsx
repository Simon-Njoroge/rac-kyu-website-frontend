import {api} from '../home'
import { useState, useEffect } from 'react'
import axios from 'axios'
interface Home{
    id:number,
    picture:string,
    description:string
}
const Managehome =()=>{
const[home,FetchHome]=useState<Home[]| any[]>([])
const fetchhomedat=async()=>{
    await axios.get(`${api}/allhomepic`)
    .then(res=>FetchHome(res.data))
    .catch(error=>console.error("failed to load home",error))
}
useEffect(()=>{
    fetchhomedat()
},[])
console.log(home)
    return(
        <>
        <div className="w-full overflow-scroll  max-h-screen pl-2 pt-5">
        <div className="">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Id</th>
        <th>picture</th>
        <th>description</th>
        <th>Update</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        home.length >0 ?(
           home && home.map((hom)=>{
            return(<>
              <tr>
        <th>{hom.id}</th>
        <td>{hom.picture}</td>
        <td>{hom.description}</td>
        <td></td>
        <td></td>
      </tr>
            </>)
           })
        ):("")
    
}
    </tbody>
  </table>
</div>
        </div>
        </>
    )
}
export default Managehome