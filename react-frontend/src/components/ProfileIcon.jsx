import React, { useState, useRef, useEffect } from "react";

export default function ProfileIcon({ user, size = 40 }) {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);
  const avatarRef = useRef(null);

  const getInitials = (name) => {
    if (!name) return "👤";
    const nameParts = name.trim().split(" ");
    return nameParts.length >= 2
      ? nameParts[0][0] + nameParts[1][0]
      : nameParts[0][0];
  };
  // console.log("USer: ", user);

  const togglePopup = () => {
    setShowPopup((prev) => !prev);
  };

  // Close popup when clicking outside
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

  const avatarStyle = {
    width: size,
    height: size,
    borderRadius: "50%",
    backgroundColor: "#ddd",
    margin: "0 30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: size / 2.5,
    color: "#eee",
    fontWeight: "bold",
    userSelect: "none",
    overflow: "hidden",
    cursor: "pointer",
    position: "relative"
  };

  const popupStyle = {
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 0,
    width: "max-content",
    backgroundColor: "#2d3748",
    userSelect: "none",
    // border: "1px solid #ccc",
    // borderRadius: "8px",
    padding: "10px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 100
  };

  return (
    <div style={{ position: "relative" }}>
      <div ref={avatarRef} onClick={togglePopup} style={avatarStyle}>
        {user?.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt="User avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          getInitials(user?.name)
        )}
      </div>

      {showPopup && (
        <div ref={popupRef} style={popupStyle}>
          <strong>{user?.name || "Unknown"}</strong>
          <p>{user?.email}</p>
          <p><b>Role: </b><em>{user?.role}</em></p>
        </div>
      )}
    </div>
  );
}
