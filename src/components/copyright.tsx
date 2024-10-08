const Copyright = () => {
    const year = new Date().getFullYear()
    return (
        <div>
            <div className="mt-8 border-t  pt-4">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                    <p className="text-xs text-black">
                        &copy; {year} Rotaract Club of Kirinyaga University. All rights reserved.
                    </p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href=" https://web.facebook.com/rotaractclubofkirinyagauniversity " className="text-black hover:text-pink-500" target="_black">Facebook</a>
                        <a href="https://x.com/rac_kyu" className="text-black hover:text-pink-500" target="_black" >Twitter</a>
                        <a href="https://www.instagram.com/rac_kyu " target="_blank" className="text-black hover:text-pink-500">Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Copyright