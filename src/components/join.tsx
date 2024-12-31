import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import join from "../assets/join.avif";

const Join = () => {
  const form = useRef<HTMLFormElement>(null);
  const [sending,setsending]=useState<Boolean>(false)
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
    <>
      {/* Header */}
      <div className="text-center mt-10 mx-0">
        <h1 className="text-3xl font-bold text-white md:mx-0 bg-pink-600 py-5 ">
          Join Us
        </h1>
      </div>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-center items-center min-h-screen bg-gray-100 px-0">
        {/* Form Section */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full md:w-1/2 max-w-lg bg-white shadow-lg rounded-lg p-6 md:p-8 m-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
            Get in Touch
          </h2>
          <div className="mb-4">
            <label htmlFor="user_name" className="block text-gray-700 font-medium">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="w-full mt-2 p-3 border border-gray-600 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="user_email" className="block text-gray-700 font-medium">
              Email
            </label>
            <input
              type="email"
              name="user_email"
              id="user_email"
              className="w-full mt-2 p-3 border border-gray-600 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="w-full mt-2 p-3 border border-gray-600 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              placeholder="Enter your message"
              rows={5}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 px-4 rounded-md font-semibold hover:bg-pink-700 transition duration-200"
          >
            {
              sending ? 'sending':'send'
            }
          </button>
        </form>

        {/* Image Section */}
        <div className="w-full md:w-1/2 max-w-lg m-4 flex justify-center">
          <img
            src={join}
            alt="Join Us Illustration"
            className="rounded-lg shadow-lg object-cover w-full h-auto"
          />
        </div>
      </div>
    </>
  );
};

export default Join;
