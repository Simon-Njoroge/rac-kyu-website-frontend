import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <p className="text-xl font-medium mt-4">Oops! The page you're looking for doesn't exist.</p>
        <button
          onClick={handleGoHome}
          className="mt-6 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
