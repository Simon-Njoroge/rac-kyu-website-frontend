
const UnderMaintenance = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-gray-800 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-red-500 mb-6 animate-bounce">
                We&apos;ll Be Back Soon!
            </h1>
            <p className="text-xl md:text-2xl mb-8">
                The Rotaract Club of Kirinyaga University wishes you a Merry Christmas and a Happy New Year!
            </p>
            <div className="flex space-x-4 justify-center mb-8 animate-pulse">
                <img
                    src="https://via.placeholder.com/150/FF0000/FFFFFF?text=Tree"
                    alt="Christmas Tree"
                    className="w-24 h-24"
                />
                <img
                    src="https://via.placeholder.com/150/FFFF00/000000?text=Star"
                    alt="Christmas Star"
                    className="w-24 h-24"
                />
                <img
                    src="https://via.placeholder.com/150/00FF00/FFFFFF?text=Gift"
                    alt="Christmas Present"
                    className="w-24 h-24"
                />
            </div>
            <p className="text-lg md:text-xl">
                Thank you for your patience. See you in the new year!
            </p>
            <footer className="absolute bottom-4 text-gray-500 text-sm">
                &copy; 2024 Rotaract Club of Kirinyaga University
            </footer>
        </div>
    );
};

export default UnderMaintenance;
