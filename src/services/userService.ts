import axios from "axios";

const BASE_URL = "http://localhost:4000/userdata";

// Get all users
const getAllUsers = () => {
  return axios.get(BASE_URL);
};

// Get user by ID
const getUserById = (id: string) => {
  return axios.get(`${BASE_URL}/${id}`);
};

// Add a new user
const addUsers = (newUser: any) => {
  return axios.post(BASE_URL, newUser);
};

const putUser = (id: string, newUser: any) => {
  return axios.put(`${BASE_URL}/${id}`, newUser);
};

// Delete a user
const deleteUser = (id: string) => {
  return axios.delete(`${BASE_URL}/${id}`);
};

// Update user's password
const updateUserPassword = (id: string, password: string) => {
  return axios.patch(`${BASE_URL}/${id}`, { password });
};

const UserService = {
  addUsers,
  putUser,
  deleteUser,
  getAllUsers,
  getUserById,
  updateUserPassword,
};

export default UserService;
