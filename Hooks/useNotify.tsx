import { Bounce, toast } from "react-toastify";

const useNotify = () => {
  const notify = (error: string) =>
    toast.error(error, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  return { notify };
};

export default useNotify;
