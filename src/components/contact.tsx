import React, { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import GoogleMapComponent from "./googlemap";

const Contactus = () => {
  const [sending, setsending] = useState(false);
  const form = useRef(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setsending(true)
    if (form.current) {
      emailjs
        .sendForm('service_v112guj', 'template_xfn9wjv', form.current, {
          publicKey: 'MOCMiLUVmJ5MjaouZ',
          
        })
        .then(
          () => {
            setsending(false)
            console.log("SUCCESS!");
            alert("Your message has been sent successfully!");
          },
          (error) => {
            setsending(false)
            console.error("FAILED...", error.text);
            alert("Failed to send the message. Please try again later.");
          }
        );
    }
  };
  return (
    <div className="mt-10 mx-4 md:mx-0 bg-gray-50">
      <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl">
        Contact Us
      </p>

      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 p-6 md:p-10">
        {/* Contact Information Section */}
        <div className="space-y-6 text-black">
          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-pink-600 text-2xl" />
            <div>
              <h1 className="font-bold text-lg">Phone</h1>
              <p className="text-base">+254 717322552</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaEnvelope className="text-pink-600 text-2xl" />
            <div>
              <h1 className="font-bold text-lg">Email</h1>
              <p className="text-base">kirinyagauniversityrotaract@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-pink-600 text-2xl" />
            <div>
              <h1 className="font-bold text-lg">Location</h1>
              <p className="text-base">Kirinyaga University</p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Get in Touch
          </h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label
                htmlFor="user_name"
                className="block text-gray-700 font-medium"
              >
                Name
              </label>
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
              <label
                htmlFor="user_email"
                className="block text-gray-700 font-medium"
              >
                Email
              </label>
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
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium"
              >
                Message
              </label>
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
              {sending ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>

      {/* Find a Club Section */}
      <div className="mt-10 text-center">
        <h1 className="font-bold text-lg md:text-xl text-black">Find a Club</h1>
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

      {/* Google Map */}
      <div className="mt-10">
        <GoogleMapComponent />
      </div>
    </div>
  );
};

export default Contactus;
