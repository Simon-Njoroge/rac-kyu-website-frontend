import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <>
      <div className='fixed top-0 left-0 w-full flex items-center bg-white shadow-md z-50 px-4 md:px-8 lg:px-16 py-4'>
        <div className='flex items-center flex-grow '>
          <img src={logo} alt="Logo" className='w-40 md:w-60 text-green-600' />
        </div>
        <div className='flex md:hidden'>
          <button onClick={toggleMenu} className='text-pink-600'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className={`flex-grow md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
            <li className='hover:border-b-2 cursor-pointer hover:border-pink-600 pb-1'>
              <Link to="/">Home</Link>
            </li>
            <li className='relative'>
              <div
                className='hover:border-b-2 cursor-pointer hover:border-pink-600 pb-1'
                onClick={toggleDropdown}
              >
                <span>About-us</span>
              </div>
              <ul
                className={`absolute left-0 mt-2 bg-white shadow-lg w-52 ${isDropdownOpen ? 'block' : 'hidden'}`}
              >
                <Link to="/council-president" onClick={closeDropdown}>
                  <li className='p-2 hover:bg-gray-100'>
                    Council of Presidents
                  </li>
                </Link>
                <Link to="/our-history" onClick={closeDropdown}>
                  <li className='p-2 hover:bg-gray-100'>
                    Our History
                  </li>
                </Link>
              </ul>
            </li>
            <Link to="/our-courses">
              <li className='hover:border-b-2 cursor-pointer hover:border-pink-600 pb-1'>
                Our courses
              </li>
            </Link>
            <Link to="/project">
              <li className='hover:border-b-2 cursor-pointer hover:border-pink-600 pb-1'>
                Projects
              </li>
            </Link>
            <Link to="/events">
              <li className='hover:border-b-2 cursor-pointer hover:border-pink-600 pb-1'>
                Events
              </li>
            </Link>

            <li className='hover:border-b-2 cursor-pointer hover:border-pink-600 pb-1'>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="" >News</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                  <Link to="/blogs"> <li><a>Blogs</a></li></Link>
                  <Link to="/gallery"> <li><a>Gallery</a></li>  </Link>
                  <Link to="/download"><li><a>Downloads</a></li></Link>
                </ul>
              </div>
            </li>

            <Link to="/join-us">
              <li className='hover:border-b-2 cursor-pointer hover:border-pink-600 pb-1'>
                Join us
              </li>
            </Link>
            <Link to="/donate">
              <li className='hover:border-b-2 cursor-pointer hover:border-pink-600 pb-1'>
                Donate
              </li>
            </Link>
            <Link to="/contact-us">
              <li className='hover:border-b-2 cursor-pointer hover:border-pink-600 pb-1'>
                Contact-us
              </li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className="pt-24">
        {/* Additional content */}
      </div>
    </>
  );
};

export default Navbar;
