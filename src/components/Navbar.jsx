import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-8 flex items-center justify-between h-16 relative">
      <h1 className="text-3xl font-bold text-gray-600">LMS</h1>
      <div className="hidden md:flex gap-8">
        <Link className="text-gray-700 font-semibold hover:border-b-2 hover:text-gray-900 hover:border-gray-300" to="/">
          Home
        </Link>
        <Link className="text-gray-700 font-semibold hover:border-b-2 hover:text-gray-900 hover:border-gray-300" to="/subjects">
          Subjects
        </Link>
      </div>
      <div className="flex items-center">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
          alt="Profile"
          className="w-10 h-10 rounded-full hidden md:block"
        />
        <button className="md:hidden ml-4" onClick={() => setIsOpen(!isOpen)}>
          <FiMenu className="text-2xl text-gray-700" />
        </button>
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden flex flex-col items-center py-4 z-10  h-[70vh]  ">
          <Link className="text-gray-700 font-semibold py-2" to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link className="text-gray-700 font-semibold py-2" to="/subjects" onClick={() => setIsOpen(false)}>
            Subjects
          </Link>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
