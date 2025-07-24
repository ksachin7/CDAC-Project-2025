import api from "./api";

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    console.log("Registration successful:", response.data);
    return response.data;
  }
  catch (error) {
    console.error("Error during registeration:", error);
    throw error.response?.data?.error || "Registeration failed!";
  }
}

export async function login(email, password) {
  try {
    const res = await api.post("/auth/login", { email, password });
    const token = res.data.token;
    if (!token) {
      throw new Error("Login failed, no token received!");
    }
    localStorage.setItem("jwt", token);
    console.log("Login successful, token stored:", token);
    return token;
  } catch (err) {
    console.error("Login error:", err);
    throw new Error("Login failed. Please check your credentials.");
  }
}

// temporary
export async function getCurrentUser() {
  const res = await api.get("/auth/me");
  console.log("Current user data:", res.data);
  return res.data; // contains email, username, etc.
}
