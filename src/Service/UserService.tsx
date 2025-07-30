import { loginUser, registerUser, logoutUser } from "../api/API";

export const registerAccount = async (
  fullName: string,
  email: string,
  phoneNumber: string,
  password: string
) => {
  try {
    const userData = { fullName, email, phoneNumber, password };
    const response = await registerUser(userData);
    return response;
  } catch (error) {
    console.error("Error in registerAccount service:", error);
    throw error;
  }
};

export const loginAccount = async (email: string, password: string) => {
  try {
    const response = await loginUser(email, password);
    return response.data;
  } catch (error) {
    console.error("Error in loginAccount service:", error);
    throw error;
  }
};

export const logoutAccount = async () => {
  try {
    const response = await logoutUser();
    return response;
  } catch (error) {
    console.error("Error in logoutAccount service:", error);
    throw error;
  }
};
