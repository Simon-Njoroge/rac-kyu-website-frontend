import { useState, useEffect } from "react";
import Homecontainer from "../containers/home-cointainer"
import { FadeLoader } from "react-spinners";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative mx-10 ">
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <FadeLoader color="#EC4899" />
        </div>
      ) : (
        <Homecontainer />
      )}
    </div>
  );
};

export default Homepage;
