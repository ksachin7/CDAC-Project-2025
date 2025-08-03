import api from "./api";

export const registerUser = async (userData) => {
  try {
    const response = await api.post("/auth/register", userData);
    console.log("Registration successful:", response.data);
    return { success: true, message: response.data };
  }
  catch (error) {
    let errorMessage = "Unexpected error occurred";
    console.error("Error during registeration:", error);
    if (!error.response) {
      errorMessage = "Cannot connect to the server. Please try again later.";
    } else if (error.response.status === 409) {
      errorMessage = error.response.data.detail || "User already exists.";
    } else {
      errorMessage = error.response.data.message || errorMessage;
    } return { success: false, message: errorMessage };
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
