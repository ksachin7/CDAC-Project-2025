import React from 'react'
import { useNavigate } from "react-router-dom";
import { useState,useEffect } from 'react';


function Navbar() {
    const navigate=useNavigate();
    const [userId, setUserId] = useState(null);
    
const [isJwt,setjwt]=useState(null);

    useEffect(() => {
      const storedtoken = localStorage.getItem("jwt");
      const user = JSON.parse(localStorage.getItem("user"));
      const userId = user?.id;
      setUserId(userId);
      if (storedtoken) {
        setjwt(storedtoken);
      }
    }, []);


    const handleLogout = () => {
   
        localStorage.removeItem("jwt");
        console.log("User logged out.");
        setjwt(null);

        setTimeout(() => {
          navigate("/");
        }, 1000)
      }

  return (
    
<nav className="w-screen bg-black px-8 py-4   sticky top-0   gap-3   flex justify-between items-center">

<div onClick={()=>{navigate('/dashboard')}}  className='transform transition duration-300 hover:scale-110 font-semibold   hover:text-blue-400 text-xl' >Dashboard</div>

<div  onClick={()=>{navigate('/About')}}        className='transform transition duration-300 hover:scale-110'>About</div>

<div  onClick={()=>{navigate('/')}}  className='transform transition duration-300 hover:scale-110'>Hompage</div>


{isJwt?<div   onClick={()=>{navigate(`/meetingreport/${userId}`)}}     className='transform transition duration-300 hover:scale-110'>Report</div>:""}



{!isJwt?<button
          className="px-4 py-2 text-sm       bg-yellow-100 text-black rounded-full  transform transition duration-300 hover:scale-110       "
          onClick={() => navigate("/login")}
        >
          Get Started — It's Free
        </button>:<button  onClick={handleLogout} className='transform transition duration-300 hover:scale-110   hover:bg-red-500  '   >Logout</button>}


</nav>

  )
}

export default Navbar