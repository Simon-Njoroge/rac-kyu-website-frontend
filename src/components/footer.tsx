import logo from '../assets/logo.png';
import Copyright from './copyright';

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
            <a href="#" className="hover:text-pink-200 bg-blue-600 text-white">About Us</a>
            <a href="#" className="hover:text-pink-200 bg-blue-600 text-white">Presidents</a>
            <a href="#" className="hover:text-pink-200 bg-blue-600 text-white">Events</a>
            <a href="#" className="hover:text-pink-200 bg-blue-600 text-white">Contact Us</a>
          </nav>

          {/* Legal Section */}
          <nav className="flex flex-col space-y-2 bg-blue-600">
            <h6 className="font-semibold text-lg text-pink-300 bg-blue-600">Legal</h6>
            <a href="#" className="hover:text-pink-200 bg-blue-600 text-white">Terms of Use</a>
            <a href="#" className="hover:text-pink-200 bg-blue-600 text-white">Privacy Policy</a>
            {/* <a href="#" className="hover:text-pink-200">Cookie Policy</a> */}
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
