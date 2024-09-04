import { TypeAnimation } from 'react-type-animation';
import friends from '../assets/friends.png';

const Join = () => {
  return (
    <>
      <div className="mx-4 mt-20 md:mx-8 lg:mx-10">
        <p className="bg-pink-600 text-center h-16 md:h-20 flex items-center justify-center text-white font-bold text-lg md:text-xl lg:text-2xl">
          Join Us Today 🫴
        </p>

        <div className="flex justify-center mt-4 md:mt-5">
          <TypeAnimation
            sequence={[
              'Welcome to the Rotaract Club of Kirinyaga University!',
              1500,
              'Empowering Future Leaders',
              1500,
              'Making a Difference Together',
              1500,
              'Join Us in Service Above Self',
              1500
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>

        <div className="flex flex-col items-center justify-center mt-6 md:mt-8 lg:mt-10">
          <a
            href="https://chat.whatsapp.com/HfiQFlfIZv93sCdLblSvn0"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-none border border-pink-600 text-pink-600 p-2 rounded-md hover:bg-pink-600 hover:text-white transition-colors duration-300 text-base md:text-lg"
          >
            Join Our WhatsApp Group
          </a>
          <h1 className="my-4 text-lg md:text-xl font-semibold">or</h1>
          <p className="text-center text-gray-700 text-sm md:text-base">
            Scan the QR code below
          </p>
          <img
            src={friends}
            alt="QR Code"
            className="mt-4 w-40 h-auto border-2 border-gray-200 rounded-lg shadow-lg md:w-48 lg:w-56"
          />
        </div>
      </div>
    </>
  );
};

export default Join;
