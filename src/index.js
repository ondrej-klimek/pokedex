import React from "react"
import ReactDOM from "react-dom/client"
import Root from "./routes/Root"
import FrontPage from "./routes/FrontPage"
import Pokedex from "./routes/Pokedex"
import About from "./routes/About"
import { RouterProvider, createHashRouter } from "react-router-dom"
import * as path from "path";

const router = createHashRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <FrontPage />,
            },
            {
                path: "/pokedex",
                element: <Pokedex />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)