import logo from '../assets/logo.png';

const Footer = () => {
  const year: number = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-10 mt-2">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0 px-4">
        {/* Logo and Description */}
        <aside className="flex flex-col items-start">
          <img src={logo} alt="Club Logo" className="mb-4 w-32" />
          <p className="text-sm">
            Rotaract Club of Kirinyaga University.
            <br />
            Developed by President Simon in 2024
          </p>
        </aside>

        {/* Navigation Links */}
        <div className="flex flex-wrap md:flex-nowrap gap-8 text-sm">
          {/* Club Section */}
          <nav className="flex flex-col space-y-2">
            <h6 className="font-semibold text-lg text-pink-600">Club</h6>
            <a href="#" className="hover:text-pink-500">About Us</a>
            <a href="#" className="hover:text-pink-500">presidents</a>
            <a href="#" className="hover:text-pink-500">Events</a>
            <a href="#" className="hover:text-pink-500">Contact_us</a>
          </nav>

          {/* Legal Section */}
          <nav className="flex flex-col space-y-2">
            <h6 className="font-semibold text-lg text-pink-600">Legal</h6>
            <a href="#" className="hover:text-pink-500">Terms of Use</a>
            <a href="#" className="hover:text-pink-500">Privacy Policy</a>
            <a href="#" className="hover:text-pink-500">Cookie Policy</a>
          </nav>
        </div>
      </div>

      {/* Copyright and Social Media */}
      <div className="mt-8 border-t border-gray-700 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-xs text-gray-400">
            &copy; {year} Rotaract Club of Kirinyaga University. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-pink-500">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-pink-500">Twitter</a>
            <a href="#" className="text-gray-400 hover:text-pink-500">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
