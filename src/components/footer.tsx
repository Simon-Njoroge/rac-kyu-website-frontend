import logo from '../assets/logo.png';
import Copyright from './copyright';
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
      <div>
        <Copyright/>
      </div>
    </footer>
  );
};

export default Footer;
