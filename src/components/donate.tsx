import { TypeAnimation } from "react-type-animation";
import mpesa from '../assets/mpesa.png';
import { api } from "./home";

const Donate = () => {
  const account = {
    paybillnumber: "765244",
    accountnumber: '265815',
  };

  return (
    <>
      <div className="mt-10">
        <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-2xl">
          Donate
        </p>
        <div className="text-center mt-8 text-black px-4">
          <TypeAnimation
            sequence={[
              'Support Rotaract Club of Kirinyaga University!',
              1500,
              'Empower Youth Leadership and Development',
              1500,
              'Contribute to Community Projects and Initiatives',
              1500,
              'Help Us Make a Lasting Impact in Our Community',
              1500,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.5em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>

        <div className="mt-10 flex flex-col items-center text-black">
          <h1 className="text-xl md:text-2xl font-semibold mb-4 text-center">
            Give via M-Pesa
          </h1>
          <img src={mpesa} alt="M-Pesa" className="w-40 md:w-48 mb-6" />
          <div className="text-center space-y-2">
            <p className="text-lg md:text-xl font-semibold">
              Paybill Number: <span className="text-pink-600">{account.paybillnumber}</span>
            </p>
            <p className="text-lg md:text-xl font-semibold">
              Account Number: <span className="text-pink-600">{account.accountnumber}</span>
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-center">
          <a href={`${api}/donate/safaricom/stkpush/makedonation/`}>
            <button className="flex items-center justify-center px-6 py-3 bg-pink-600 text-white text-lg font-bold mb-2 rounded-lg hover:bg-pink-700 transition duration-300 shadow-md border border-pink-800">
              Donate via M-Pesa
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Donate;
