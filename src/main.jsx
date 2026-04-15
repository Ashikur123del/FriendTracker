import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./App.jsx";
import "./index.css";

import { FriendProvider } from "./Components/Context/FriendProvider/FriendProvider.jsx"; 
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FriendProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </FriendProvider>
    
  </StrictMode>
);