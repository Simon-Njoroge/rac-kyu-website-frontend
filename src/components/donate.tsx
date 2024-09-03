import { TypeAnimation } from "react-type-animation";
import mpesa from '../assets/mpesa.png';

const Donate = () => {
  const account = {
    paybillnumber: "765244",
    accountnumber: '265815',
  };

  return (
    <>
      <div className="mt-10 mx-5 md:mx-20">
        <p className="bg-pink-600 text-center h-20 flex items-center justify-center text-white font-bold text-xl">
          Donate
        </p>
        <div className="text-center mt-5">
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
            style={{ fontSize: '1.2em', display: 'inline-block' }}
            repeat={Infinity}
          />
        </div>

        <div className="mt-10 flex flex-col items-center">
          <h1 className="text-lg md:text-xl font-semibold mb-3 text-center">
            Give via M-Pesa
          </h1>
          <img src={mpesa} alt="M-Pesa" className="w-32 md:w-40 mb-5" />
          <div className="text-center">
            <p className="text-lg md:text-xl font-semibold">Paybill Number: {account.paybillnumber}</p>
            <p className="text-lg md:text-xl font-semibold">Account Number: {account.accountnumber}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
