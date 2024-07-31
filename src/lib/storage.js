const SESSION_KEY = "buidlv2";

export const setAuthToken = (token) => {
  localStorage.setItem(SESSION_KEY, token);
};

export const getAuthToken = () => {
  return localStorage.getItem(SESSION_KEY) || null;
};

export const removeAuthToken = () => {
  localStorage.removeItem(SESSION_KEY);
};

export const StorageService = {
  setAuthToken,
  getAuthToken,
  removeAuthToken,
};
