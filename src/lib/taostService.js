import { toast } from "react-toastify";

const position = "top-center";
const theme = "dark";
const hideProgressBar = true;
const autoClose = 3000;

const toastService = {
  showSuccessMessage: (message) => {
    toast.success(message, {
      position,
      theme,
      hideProgressBar,
      autoClose,
    });
  },

  showInfoMessage: (message) => {
    toast.info(message, {
      position,
      hideProgressBar,
      theme,
      autoClose,
    });
  },

  showErrorMessage: (message) => {
    toast.error(message, {
      position,
      hideProgressBar,
      theme,
      autoClose,
    });
  },
};

export default toastService;
