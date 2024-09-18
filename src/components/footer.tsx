import logo from '../assets/logo.png';
import Copyright from './copyright';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10 mt-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 px-4 bg-blue-600">
        {/* Logo and Description */}
        <aside className="flex flex-col items-start bg-blue-600">
          <img src={logo} alt="Club Logo " className="mb-4 w-56 bg-blue-600  " />
          <p className="text-sm bg-blue-600 text-white">
            Rotaract Club of Kirinyaga University.
            <br />
            Developed and Managed by the rotaract club of Kirinyaga University
          </p>
        </aside>

        {/* Navigation Links */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 text-sm bg-blue-600">
          {/* Club Section */}
          <nav className="flex flex-col space-y-2 bg-blue-600">
            <h6 className="font-semibold text-lg text-pink-300 bg-blue-600">Club</h6>
           <Link to="/council-president" className='bg-blue-600'><a href="#" className="hover:text-pink-200 bg-blue-600 text-white">Presidents</a></Link>
           <Link to="/our-courses" className='bg-blue-600'><a href="#" className="hover:text-pink-200 bg-blue-600 text-white">Our courses</a></Link>
           <Link to="/project" className='bg-blue-600'><a href="#" className="hover:text-pink-200 bg-blue-600 text-white">Projects</a></Link>
           <Link to="/events" className='bg-blue-600'><a href="#" className="hover:text-pink-200 bg-blue-600 text-white">Events</a></Link>
           <Link to="/gallery" className='bg-blue-600'><a href="#" className="hover:text-pink-200 bg-blue-600 text-white">Gallery</a></Link>
          </nav>

          {/* Legal Section */}
          <nav className="flex flex-col space-y-2 bg-blue-600">
            <h6 className="font-semibold text-lg text-pink-300 bg-blue-600">Legal</h6>
            <a href="https://drive.google.com/file/d/1dw-9heqk-v_xoVw7uqw-N7_TS5QEVYrK/view?usp=sharing" target="_blank" className="hover:text-pink-200 bg-blue-600 text-white">Terms of Use</a>
            <a href="https://drive.google.com/file/d/1tet_5XY8_wVaVXpoDGJg6sIrgLf-5-vS/view?usp=sharing"  target="_blank"  className="hover:text-pink-200 bg-blue-600 text-white">Privacy Policy</a>
         
          </nav>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div>
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
