// import React from 'react';

const STKPushNotification = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6 text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Safaricom STK Push Sent</h2>
                <p className="text-gray-600 mb-6">
                    An STK Push request has been sent to your phone. Please check your phone and enter your PIN to complete the transaction.
                </p>
                <div className="flex justify-center">
                    <svg
                        className="animate-spin h-10 w-10 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                        ></path>
                    </svg>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                    If you don’t see the prompt, ensure your phone is on and try again.
                </p>
                <div className="mt-6">
                    <button
                        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onClick={() => window.location.href = '/'}
                    >
                        Go Back to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default STKPushNotification;
