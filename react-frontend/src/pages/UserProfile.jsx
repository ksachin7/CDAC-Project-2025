import React, { useEffect, useState } from "react";

export default function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  if (!user) {
    return <div style={styles.loading}>Loading user data...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.profileCard}>
        <div style={styles.avatar}>
          {user?.avatarUrl ? (
            <img
              src={user.avatarUrl}
              alt="User avatar"
              style={styles.avatarImg}
            />
          ) : (
            <div style={styles.initials}>
              {user.name?.split(" ").map(n => n[0]).join("")}
            </div>
          )}
        </div>
        <h2 style={styles.name}>{user.name}</h2>
        <p>Email: {user.email}</p>
        {/* <p>Username: {user.username}</p> */}
        <p>Role: {user.role}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  loading: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontFamily: "Arial, sans-serif"
  },
  profileCard: {
    padding: "30px",
    borderRadius: "10px",
    // backgroundColor: "#111",
    boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
    textAlign: "center",
    maxWidth: "400px",
    fontFamily: "Arial, sans-serif"
  },
  avatar: {
    width: "100px",
    height: "100px",
    margin: "0 auto 20px",
    borderRadius: "50%",
    overflow: "hidden",
    backgroundColor: "#ddd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  },
  initials: {
    fontSize: "32px",
    color: "#555",
    fontWeight: "bold"
  },
  name: {
    marginBottom: "10px",
    fontSize: "24px"
  }
};
