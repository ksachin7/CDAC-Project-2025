import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [isJwt, setJwt] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('jwt');
    if (storedToken) {
      setJwt(storedToken);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwt');
    console.log('User logged out.');
    setJwt(null);
    setTimeout(() => navigate('/'), 1000);
  };

  return (
    <nav className="w-full bg-black px-12 py-4 sticky top-0 z-10 flex justify-between items-center">
      <div
        className="text-green-400 text-3xl font-bold cursor-pointer transform transition duration-300 hover:scale-105"
        onClick={() => navigate('/')}
      >
        eValuation
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6 text-white text-lg">
        <div
          className="cursor-pointer transform transition duration-300 hover:scale-110"
          onClick={() => navigate('/about')}
        >
          About
        </div>

        {/* <div
          className="cursor-pointer transform transition duration-300 hover:scale-110"
          onClick={() => navigate('/')}
        >
          Homepage
        </div> */}

        <div
          className="cursor-pointer transform transition duration-300 hover:scale-110"
          onClick={() => navigate('/report')}
        >
          Report
        </div>

        {!isJwt ? (
          <button
            className="px-4 py-2 text-sm bg-yellow-100 text-black rounded-full transform transition duration-300 hover:scale-110"
            onClick={() => navigate('/register')}
          >
            Get Started — It's Free
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-sm text-white bg-red-600 rounded-full transform transition duration-300 hover:scale-110 hover:bg-red-500"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
