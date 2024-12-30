import React, { useRef } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSearch, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contactus = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm('service_v112guj', 'template_xfn9wjv', form.current, {
          publicKey: 'MOCMiLUVmJ5MjaouZ',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            alert('Your message has been sent successfully!');
          },
          (error) => {
            console.error('FAILED...', error.text);
            alert('Failed to send the message. Please try again later.');
          }
        );
    }
  };

  return (
    <>
      <div className="mt-10 mx-4 md:mx-0 bg-gray-100">
        <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl">
          Contact Us
        </p>

        {/* Contact Information Section */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Phone, Email, and Location */}
          <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
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
        </div>

        {/* Contact Form Section */}
        <div className="mt-10 flex justify-center">
          <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 md:p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Get in Touch</h2>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6"
            >
              <div>
                <label htmlFor="user_name" className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="user_email" className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
                <textarea
                  name="message"
                  id="message"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                  placeholder="Enter your message"
                  rows={5}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-pink-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-pink-700 transition duration-200"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Social Media Handles */}
        <div className="mt-10 text-center font-bold">
          <h1>Social Media Handles</h1>
        </div>
        <div className="flex justify-center gap-10 mt-5 flex-wrap">
          {/* Facebook */}
          <div>
            <a
              href="https://web.facebook.com/rotaractclubofkirinyagauniversity"
              target="_blank"
              rel="noreferrer"
            >
              <p className="cursor-pointer hover:text-pink-600 font-bold">
                <FaFacebook className="inline-block mr-2" /> Facebook
              </p>
            </a>
          </div>

          {/* Instagram */}
          <div>
            <a
              href="https://www.instagram.com/rac_kyu"
              target="_blank"
              rel="noreferrer"
            >
              <p className="cursor-pointer hover:text-pink-600 font-bold">
                <FaInstagram className="inline-block mr-2" /> Instagram
              </p>
            </a>
          </div>

          {/* Twitter */}
          <div>
            <a
              href="https://x.com/rac_kyu"
              target="_blank"
              rel="noreferrer"
            >
              <p className="cursor-pointer hover:text-pink-600 font-bold">
                <FaTwitter className="inline-block mr-2" /> Twitter
              </p>
            </a>
          </div>
        </div>

        {/* Find a Club Section */}
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
