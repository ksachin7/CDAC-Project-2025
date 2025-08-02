import React, { useState, useRef, useEffect } from "react";

export default function ProfileIcon({ user, size = 40 }) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const avatarRef = useRef(null);

  const getInitials = (name) => {
    if (!name) return "👤";
    const nameParts = name.trim().split(" ");
    return nameParts.length >= 2
      ? (nameParts[0][0] + nameParts[1][0]).toUpperCase()
      : nameParts[0][0].toUpperCase();
  };

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(e.target) &&
        !avatarRef.current.contains(e.target)
      ) {
        setShowPopup(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const avatarSize = {
    width: `${size}px`,
    height: `${size}px`,
    fontSize: `${size / 2.5}px`,
  };

  return (
    <div className="relative inline-block">
      <div
        ref={avatarRef}
        onClick={togglePopup}
        className="rounded-full bg-gray-800 text-blue-400 font-bold flex items-center justify-center cursor-pointer overflow-hidden border border-blue-500 shadow-md hover:scale-105 transition duration-200"
        style={{ ...avatarSize }}
      >
        {user?.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt="User avatar"
            className="w-full h-full object-cover"
          />
        ) : (
          getInitials(user?.name)
        )}
      </div>

      {showPopup && (
        <div
          ref={popupRef}
          className="absolute mt-2 right-0  bg-gray-900 border border-blue-700 text-white rounded-xl shadow-xl p-4 z-50 w-48"
        >
          <p className="font-bold text-blue-400 text-lg capitalize">
            {user?.name || "Unknown"}
          </p>
          <p className="text-gray-300 text-base">{user?.email}</p>
          <p className="mt-1 text-base">
            <span className="font-semibold text-gray-400">Role:</span>{" "}
            <span className="italic text-blue-300">{user?.role}</span>
          </p>
        </div>
      )}
    </div>
  );
}
