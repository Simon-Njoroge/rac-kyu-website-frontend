const Copyright = () => {
    const year = new Date().getFullYear()
    return (
        <div>
            <div className="mt-8 border-t border-gray-700 pt-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    <p className="text-xs text-gray-400">
                        &copy; {year} Rotaract Club of Kirinyaga University. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="text-gray-400 hover:text-pink-500">Facebook</a>
                        <a href="#" className="text-gray-400 hover:text-pink-500">Twitter</a>
                        <a href="#" className="text-gray-400 hover:text-pink-500">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright