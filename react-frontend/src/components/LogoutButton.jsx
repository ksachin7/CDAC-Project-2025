import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoLogOutOutline } from "react-icons/io5";
import { ImSpinner10 } from "react-icons/im";

export default function LogoutButton() {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const handleLogout = () => {
    setIsLoggingOut(true);
    localStorage.removeItem("jwt");
    console.log("User logged out.");
    // localStorage.removeItem("user");
    setTimeout(() => {
      navigate("/login");
    }, 1000)
  }

  return (
    <button className="logout-button" onClick={handleLogout}>
      {isLoggingOut ? <p><ImSpinner10 className="spinner" /></p> : <IoLogOutOutline size={30} />}
    </button>
  );
}
