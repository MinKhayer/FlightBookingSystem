import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Routes from "./Routes/Router.jsx";
import { AuthContextProvider } from "./Context/AuthContext.jsx";
import { StateContextProvider } from "./Context/StateContext.jsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <StateContextProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={Routes} />
        </QueryClientProvider>
      </StateContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
