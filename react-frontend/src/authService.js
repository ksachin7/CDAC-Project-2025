import api from "./api";

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    console.log("Registration successful:", response.data);
    return response.data;
  }
  catch (error) {
    console.error("Error during registeration:", error);
    throw error.response?.data?.error || error.message || "Registeration failed!";
  }
}

export async function login(email, password) {
  try {
    const res = await api.post("/auth/login", { email, password });
    const { token, user } = res.data;

    if (!token) {
      throw new Error("Login failed, no token received!");
    }

    localStorage.setItem("jwt", token);
    localStorage.setItem("user", JSON.stringify(user));
    console.log("Login successful, token stored:", token);

    return { token, user };
  } catch (err) {
    console.error("Login error:", err);
    throw new Error(err.response?.data || err.message || "Login failed. Please check your credentials.");
  }
}

// temporary
export async function getCurrentUser() {
  const res = await api.get("/auth/me");
  console.log("Current user data:", res.data);
  return res.data; // contains email, username, etc.
}
