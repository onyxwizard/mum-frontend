
const apiUrl = import.meta.env.VITE_API_URL;

export const ContractFormService = {
  async getAllUsers() {
    const response = await fetch(`${apiUrl}/form`);

    if (!response.ok) {
      throw new Error("Failed to load contacts");
    }

    return response.json();
  },

  async createUser(userData) {
    const response = await fetch(`${apiUrl}/form/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to create contact");
    }

    return response.json();
  },

  async updateUser(id, userData) {
    const response = await fetch(`${apiUrl}/form/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to update contact");
    }

    return response.json();
  },

  async deleteUser(id) {
    const response = await fetch(`${apiUrl}/form/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Failed to delete contact");
    }
  },
};