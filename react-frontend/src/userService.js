import api from "./api";

export async function switchRole(newRole, user) {
  try {
    const res = api.put(`/users/${user.id}/role`, newRole, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    return res;
  }
  catch (error) {
    console.error("Error switching role: ", error);
    throw error.response?.data?.error;
  }
}