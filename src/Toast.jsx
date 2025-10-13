import React from "react";
import { ToastContainer, toast } from "react-toastify";

const Toast = () => {
  const GetToast = () => {
    toast("Toasted Successfully!!! 🎉");
  };

  return (
    <>
      <button onClick={GetToast}>Click to Toast</button>
      <ToastContainer 
        position="top-center" 
      />
    </>
  );
};

export default Toast;
