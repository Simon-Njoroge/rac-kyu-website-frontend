import { useState, useEffect } from "react";
import Homecontainer from "../containers/home-cointainer";
import Logo from '../assets/rac_kyu_logo-removebg-preview.png';

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative md:px-10 px-2 lg:md:px-10">
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <img src={Logo} alt="RAC KYU Logo" className="w-40 h-40 object-contain" />
        </div>
      ) : (
        <Homecontainer />
      )}
    </div>
  );
};

export default Homepage;
