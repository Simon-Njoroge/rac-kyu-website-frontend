import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSearch, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import contact from '../assets/contact us.avif';
import GoogleMapComponent from './googlemap';
const Contactus = () => {
    return (
        <>
            <div className="mt-20 mx-4 md:mx-10">
                <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl">
                    Contact Us
                </p>

                {/* Image Section */}
                <div className="mt-5">
                    <img src={contact} alt="Contact Us" className="w-full h-auto object-cover" />
                </div>

                {/* Contact Information Section */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-pink-600 text-xl" />
                        <div>
                            <h1 className="font-bold text-lg">Phone</h1>
                            <p className="text-base">+254 717322552</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-pink-600 text-xl" />
                        <div>
                            <h1 className="font-bold text-lg">Email</h1>
                            <p className="text-base">kirinyagauniversityrotaract@gmail.com</p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-pink-600 text-xl" />
                        <div>
                            <h1 className="font-bold text-lg">Location</h1>
                            <p className="text-base">Kirinyaga University</p>
                        </div>
                    </div>
                </div>
                <div className='mt-5 text-center font-bold'>
                    <h1>Social Media Handles</h1>
                </div>
                <div className='flex flex-3 justify-between w-full mt-5'>
                    <div>
                        <a href="https://web.facebook.com/rotaractclubofkirinyagauniversity" target="_blank">
                            <p className='cursor-pointer hover:text-pink-600 font-bold'>
                                <FaFacebook className='inline-block mr-2' /> Facebook
                            </p>
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/rac_kyu" target="_blank">
                            <p className='cursor-pointer hover:text-pink-600 font-bold'>
                                <FaInstagram className='inline-block mr-2' /> Instagram
                            </p>
                        </a>
                    </div>
                    <div>
                        <a href="https://x.com/rac_kyu" target="_blank">
                            <p className='cursor-pointer hover:text-pink-600 font-bold'>
                                <FaTwitter className='inline-block mr-2' /> Twitter
                            </p>
                        </a>
                    </div>
                </div>
                <div>
                    <p>map</p>
                    <GoogleMapComponent/>
                </div>
                <div className="mt-10 text-center">
                    <h1 className="font-bold text-lg md:text-xl">Find a Club</h1>
                    <a
                        href="https://my.rotary.org/en/club-search"
                        target="_blank"
                        className="mt-3 inline-flex items-center justify-center gap-2 text-blue-600 hover:underline"
                        rel="noreferrer"
                    >
                        <FaSearch className="text-pink-600 text-xl" />
                        Find?
                    </a>
                </div>
            </div>
        </>
    );
};

export default Contactus;
