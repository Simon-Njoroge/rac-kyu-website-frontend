import logo from '../../assets/logo.png';

const AdminHeader = () => {
  return (
    <>
      <div className='bg-pink-600 w-full flex justify-between items-center p-4 '>
        <div className="flex items-center bg-pink-600">
          <img src={logo} alt="Logo" className="w-20 h-auto" />
        </div>
        <div className="text-white  bg-none bg-pink-600">
          Welcome back ADMIN 👋
        </div>
      </div>
    </>
  );
}

export default AdminHeader;
