
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram,faTiktok } from '@fortawesome/free-brands-svg-icons';
const date:any= new Date().getFullYear()
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-12 rounded-t-md">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Club Information */}
        <div>
          <h3 className="text-white text-xl font-bold mb-4">Rotaract Club of Kirinyaga University</h3>
          <p className="text-sm leading-relaxed">
            Building a better community through service, leadership, and fellowship. Join us and be part of the change.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <a href="/en-us/our-history" className="hover:text-white transition">About Us</a>
            </li>
            <li>
              <a href="/en-us/events" className="hover:text-white transition">Events</a>
            </li>
            <li>
              <a href="/en-us/project" className="hover:text-white transition">Projects</a>
            </li>
            <li>
              <a href="/en-us/contact-us" className="hover:text-white transition">Contact</a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-5">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-400 hover:text-blue-500 transition">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="https://x.com/kyu_rotaract" aria-label="Twitter" className="text-gray-400 hover:text-blue-400 transition">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://www.instagram.com/rac_kyu" aria-label="Instagram" className="text-gray-400 hover:text-pink-500 transition">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a href="https://www.tiktok.com/@rac_kyu" aria-label="Tiktok" className="text-gray-400 hover:text-blue-600 transition">
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </a>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h4 className="text-white text-lg font-semibold mb-4">Subscribe</h4>
          <p className="text-sm mb-4">Get updates on our latest events and activities.</p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md bg-gray-700 text-gray-300 placeholder-gray-500 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center">
        <p className="text-sm">&copy; {date} Rotaract Club of Kirinyaga University. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
