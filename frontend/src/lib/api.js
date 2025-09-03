import { axiosInstance } from "./axios";

// ================== AUTH ==================
export const signup = async (signupData) => {
  const response = await axiosInstance.post("/auth/signup", signupData);
  return response.data;
};

export const login = async (loginData) => {
  const response = await axiosInstance.post("/auth/login", loginData);
  return response.data;
};

export const logout = async () => {
  const response = await axiosInstance.post("/auth/logout");
  return response.data;
};

export const getAuthUser = async () => {
  try {
    const res = await axiosInstance.get("/auth/me");
    return res.data;
  } catch (error) {
    console.log("Error in getAuthUser:", error);
    return null;
  }
};

// ================== TASKS ==================
export const getTasks = async () => {
  const response = await axiosInstance.get("/task");
  return response.data;
};

export const getTaskById = async (taskId) => {
  const response = await axiosInstance.get(`/task/${taskId}`);
  return response.data;
};

export const createTask = async (taskData) => {
  const response = await axiosInstance.post("/task", taskData);
  return response.data;
};

export const updateTask = async (taskId, updatedData) => {
  const response = await axiosInstance.put(`/task/${taskId}`, updatedData);
  return response.data;
};

export const deleteTask = async (taskId) => {
  const response = await axiosInstance.delete(`/task/${taskId}`);
  return response.data;
};

export const toggleTaskCompletion = async (taskId) => {
  const response = await axiosInstance.patch(`/task/${taskId}/toggle`);
  return response.data;
};
