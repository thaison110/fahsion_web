import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import { ContextProvider } from "./Contexts/ContextProvider.jsx";
import GlobalStyles from "./components/GlobalStyles/Index.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <GlobalStyles>
            <ContextProvider>
                <RouterProvider router={router} />
                <ToastContainer />
            </ContextProvider>
        </GlobalStyles>
    </React.StrictMode>
);
