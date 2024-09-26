
import axios from 'axios'
import { useState, useEffect } from 'react'
import { api } from './home'
import { FadeLoader } from "react-spinners";
interface Tblog {
  id:number,
  title:string,
  image:string,
  descrition:string
}
const Blogs = () => {
  const [blogs,setBlogs]=useState<Tblog[]>([])
  const Handleblogdata=async()=>{
    try{
      const res= await axios.get(`${api}/allblogs`)
      setBlogs(res.data)
    }
    catch(error){
      console.error("failed to load blogs data",error)
    }
  }
  useEffect(()=>{
    Handleblogdata()
  },[])
 console.log(blogs)
  return (
    <>
    <div>
    <p className="bg-pink-600 text-center h-20 flex items-center mt-20 mx-10 justify-center text-white font-bold text-xl">
          Blogs
        </p>
    </div>
    <div className='grid grid-cols-3 gap-5 mx-10 mt-10 '>
      {
        blogs.length > 0 ?(blogs && blogs.map((blog:Tblog)=>{
          return(<>
           <div key={blog.id} className='cursor-pointer relative hover:-top-5 hover:shadow-md   hover:shadow-black rounded-md hover:ease-in-out'>
            <img src={blog.image} alt="" className='w-full h-48 rounded-md'/>
            <h1 className='my-5 text-center font-bold   '>{blog.title.toUpperCase()}</h1>
            <p className=' p-2'>{blog.descrition}</p>
            </div>
            </>)
        })):(
          <div className="w-full items-center justify-center gap-5 flex">
          <FadeLoader  color="#ff007f" />
          
          <p className="mt-3">loading blogs...</p>
        </div>
        )
      }
    </div>
    </>
  )
}

export default Blogs
