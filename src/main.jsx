import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./App.jsx";
import "./index.css";
// FriendProvider ইম্পোর্ট করুন
import { FriendProvider } from "./FriendProvider/FriendProvider.jsx"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* FriendContext.Provider এর বদলে FriendProvider ব্যবহার করুন */}
    <FriendProvider>
      <RouterProvider router={router} />
    </FriendProvider>
  </StrictMode>
);