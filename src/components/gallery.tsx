import { useState, useEffect } from "react";
import { api } from './home';
import axios from "axios";
import { ClipLoader } from "react-spinners";

interface GalleryItem {
  id: number;
  image: string;
  link: string;
  description: string;
}

const Gallery = () => {
  const [gallery, setGallery] = useState<GalleryItem[]>([]);

  const getGallery = async () => {
    await axios.get(`${api}/allgalley`)
      .then(res => setGallery(res.data))
      .catch(error => console.error("Error fetching data from the database", error));
  };

  useEffect(() => {
    getGallery();
  }, []);
console.log(gallery)
  return (
    <>
     <p className="bg-pink-600 text-center h-20 flex items-center mt-10 mx-10 justify-center text-white font-bold text-xl">
          gallery
        </p>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 md:px-10">
     
        {gallery.length > 0 ? (
          gallery.map((gall: GalleryItem) => (
            <div key={gall.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img src={gall.image} alt={`Gallery item ${gall.id}`} className="w-full h-48 object-cover" />
              <div className="p-4">
                <p className="text-gray-700 text-sm">{gall.description}</p>
                <a href={gall.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline mt-2 block">View Gallery</a>
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center items-center h-screen">
            <ClipLoader  color="#ff007f" />
            <p>loading gallery....</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Gallery;
