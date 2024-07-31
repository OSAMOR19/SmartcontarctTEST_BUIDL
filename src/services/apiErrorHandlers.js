export const authErrorHandler = (err) => {
  throw new Error(err.response?.data?.message || "Something went wrong");
};
