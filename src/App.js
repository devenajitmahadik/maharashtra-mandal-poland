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
        ],
        errorElement: <ErrorWrapper />
    },
], {
    basename: "/maharashtra-mandal-poland"
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <ThemeProvider>
        <RouterProvider router={appRouter}></RouterProvider>
    </ThemeProvider>
);