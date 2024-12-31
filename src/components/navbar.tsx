import logo from '../assets/logo.png';
// import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const toggleDropdown = () => {
  //   setIsDropdownOpen(!isDropdownOpen);
  // };

  // const closeDropdown = () => {
  //   setIsDropdownOpen(false);
  // };

  return (
    <>
      <div className='fixed top-0 left-0 w-full flex items-center bg-gray-800 shadow-md z-50 px-4 md:px-8 lg:px-16 py-4 text-white'>
        <div className='flex items-center flex-grow '>
          <img src={logo} alt="Logo" className='w-40 md:w-60 text-green-600 ' />
        </div>
        <div className='flex md:hidden'>
          <button onClick={toggleMenu} className='text-pink-600'>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        <nav className={`flex-grow md:flex ${isOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='flex flex-col md:flex-row gap-4 md:gap-10 items-center'>
            <li className=' cursor-pointer font-bold text-pink-600 hover:underline transition ease-in-out pb-1'>
              <a href="/">Home</a>
            </li>
            <li className=' cursor-pointer hover:underline pb-1 transition ease-in-out'>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="" className='hover:text-pink-600'>About-us</div>
                <ul tabIndex={0} className="dropdown-content  bg-gray-800 rounded-box z-[1] w-52 p-2 shadow">
                  <a href="/en-us/council-president"> <li className='my-2 hover:text-pink-600 hover:underline'><a>Council of president</a></li></a>
                  <a href="/en-us/board"> <li className='my-2 hover:text-pink-600 hover:underline'><a>Board Members</a></li>  </a>
                  <a href="/en-us/members"> <li className='my-2 hover:text-pink-600 hover:underline'><a>Club Members</a></li>  </a>
                  <a href="/en-us/our-history"><li className='my-2 hover:text-pink-600 hover:underline'><a>Our History</a></li></a>
                </ul>
              </div>
            </li>
            <a href="/en-us/our-courses">
              <li className=' cursor-pointer hover:text-pink-600 hover:underline pb-1 transition ease-in-out'>
                Our courses
              </li>
            </a>
            <a href="/en-us/project">
              <li className='cursor-pointer hover:text-pink-600 hover:underline pb-1'>
                Projects
              </li>
            </a>
            <a href="/en-us/events">
              <li className='cursor-pointer hover:text-pink-600 hover:underline pb-1'>
                Events
              </li>
            </a>

            <li className=' cursor-pointer hover:underline transition ease-in-out pb-1'>
              <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="" className='hover:text-pink-600'>News</div>
                <ul tabIndex={0} className="dropdown-content  bg-gray-800 rounded-box z-[1] w-52 p-2 shadow">
                  <a href="/en-us/blogs"> <li className='my-2 hover:text-pink-600 hover:underline transition ease-in-out'><a>Blogs</a></li></a>
                  <a href="/en-us/gallery"> <li className='my-2 hover:text-pink-600 hover:underline transition ease-in-out'><a>Gallery</a></li>  </a>
                  <a href="/en-us/download"><li className='my-2 hover:text-pink-600 hover:underline transition ease-in-out'><a>Downloads</a></li></a>
                  <a href="/en-us/templates"><li className='my-2 hover:text-pink-600 hover:underline transition ease-in-out'><a>Templates</a></li></a>
                </ul>
              </div>
            </li>

            <a href="/en-us/join-us">
              <li className='ursor-pointer hover:text-pink-600 hover:underline transition ease-in-out pb-1'>
                Join us
              </li>
            </a>
            <a href="/en-us/donate">
              <li className='cursor-pointer hover:text-pink-600 hover:underline transition ease-in-out pb-1'>
                Donate
              </li>
            </a>
            <a href="/en-us/contact-us">
              <li className='cursor-pointer hover:text-pink-600 hover:underline transition ease-in-out pb-1'>
                Contact-us
              </li>
            </a>
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
