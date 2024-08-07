import logo from '../assets/logo.png'
const Footer=()=>{
    return(
        <>
<footer className="bg-black text-white p-10 mt-2">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
    
    <aside className="flex flex-col items-start">
      <img src={logo} alt="Club Logo" className="mb-4 w-32" />
      <p className="text-sm">
        Club of Kirinyaga University.
        <br />
        Developed by President Simon in 2024
      </p>
    </aside>

   
    <div className="flex flex-wrap md:flex-nowrap gap-8">
      
      <nav className="flex flex-col space-y-2">
        <h6 className="font-semibold text-lg">Services</h6>
        <a href="#" className="hover:text-gray-400">Branding</a>
        <a href="#" className="hover:text-gray-400">Design</a>
        <a href="#" className="hover:text-gray-400">Marketing</a>
        <a href="#" className="hover:text-gray-400">Advertisement</a>
      </nav>

     
      <nav className="flex flex-col space-y-2">
        <h6 className="font-semibold text-lg">Company</h6>
        <a href="#" className="hover:text-gray-400">About Us</a>
        <a href="#" className="hover:text-gray-400">Contact</a>
        <a href="#" className="hover:text-gray-400">Jobs</a>
        <a href="#" className="hover:text-gray-400">Press Kit</a>
      </nav>

     
      <nav className="flex flex-col space-y-2">
        <h6 className="font-semibold text-lg">Legal</h6>
        <a href="#" className="hover:text-gray-400">Terms of Use</a>
        <a href="#" className="hover:text-gray-400">Privacy Policy</a>
        <a href="#" className="hover:text-gray-400">Cookie Policy</a>
      </nav>
    </div>
  </div>
</footer>

        </>
    )
}
export default Footer