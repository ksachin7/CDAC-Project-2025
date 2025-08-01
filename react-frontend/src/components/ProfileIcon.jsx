import React from "react";
import { useNavigate } from "react-router-dom";

export default function ProfileIcon({ user, size = 40 }) {
  const navigate = useNavigate();

  const getInitials = (name) => {
    if (!name) return "👤";
    const nameParts = name.trim().split(" ");
    return nameParts.length >= 2
      ? nameParts[0][0] + nameParts[1][0]
      : nameParts[0][0];
  };

  const handleClick = () => {
    navigate("/profile");
  };

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
    color: "#555",
    fontWeight: "bold",
    overflow: "hidden",
    cursor: "pointer"
  };

  return (
    <div onClick={handleClick} style={avatarStyle}>
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
  );
}
