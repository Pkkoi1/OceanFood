export const getUserId = (): string | null => {
  const user = localStorage.getItem("userData");
  return user ? JSON.parse(user).user._id : null;
};
