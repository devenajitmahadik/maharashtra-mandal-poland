import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/AboutUs";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Error from "./Pages/Error/Error";

import "./app.scss";
import { ThemeContext, ThemeProvider } from "./context/ThemeContext";
const validBasename = "/maharashtra-mandal-poland";

const AppLayout = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={`app ${isDarkMode ? "dark" : ""}`}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

const ErrorWrapper = () => {
    const { isDarkMode } = useContext(ThemeContext);
    return <Error isDarkMode={isDarkMode} />;
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/about",
                element: <AboutUs />,
            },
            {
                path: "/contact",
                element: <ContactUs />,
            },
            {
                path: "*",
                element: <ErrorWrapper />
            } // Catch-all
        ],
        errorElement: <ErrorWrapper />
    },
], {
    basename: validBasename
});

const path = window.location.pathname;
const isValidBasePath = path === validBasename || path.startsWith(validBasename + "/");
const root = ReactDOM.createRoot(document.getElementById("root"));

if (!isValidBasePath) {
    root.render(
        <ThemeProvider>
            <ErrorWrapper />
        </ThemeProvider>
    );
} else {
    root.render(
        <ThemeProvider>
            <RouterProvider router={appRouter}></RouterProvider>
        </ThemeProvider>
    );
}