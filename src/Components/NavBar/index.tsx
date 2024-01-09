import React from "react";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <button className="text-white text-2xl font-bold" onClick={() => navigate('/home')}>
            My App
          </button>
        </div>
        <ul className="flex space-x-4">
          <li>
          <button className="text-white hover:text-gray-300" onClick={() => navigate('/home')}>
            Home
          </button>
          </li>
          <li>
            <button className="text-white hover:text-gray-300" onClick={() => navigate('/login')}>
              Login
            </button>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
