import { useState, useEffect } from "react";
import { api } from "./home";
import axios from "axios";
import { ClipLoader } from "react-spinners";
import { Tgallery } from "./alltypes";

const Gallery = () => {
  const [gallery, setGallery] = useState<Tgallery[]>([]);

  const getGallery = async () => {
    try {
      const res = await axios.get(`${api}/api/all/gallery`);
      setGallery(res.data);
    } catch (error) {
      console.error("Error fetching data from the database", error);
    }
  };

  useEffect(() => {
    getGallery();
  }, []);

  return (
    <>
      <div className="bg-gray-100">
        {/* Heading */}
        <div className="text-center mt-10 mx-0">
          <h1 className="text-3xl font-bold text-white bg-pink-600 py-5 ">
            Gallery
          </h1>
        </div>

        {/* Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-0 md:px-0">
          {gallery.length > 0 ? (
            gallery.map((gall: Tgallery) => (
              <div
                key={gall.id}
                className="bg-gray-800 rounded-lg mb-2 shadow-md  hover:shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              >
                {/* Image */}
                <img
                  src={gall.Image}
                  alt={`Gallery item ${gall.id}`}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-white">{gall.gallery_title}</h2>
                  <p className="text-sm text-white mt-1">
                    Uploaded on:{new Date(gall.created_on).toLocaleDateString()}
                  </p>
                  {/* <p className="text-white mt-2">{gall.description}</p> */}
                  <a
                    href={gall.gallery_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:underline block mt-3"
                  >
                    View Gallery
                  </a>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col justify-center items-center h-screen">
              <ClipLoader color="#ff007f" />
              <p className="text-gray-600 mt-4">Loading gallery...</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Gallery;
