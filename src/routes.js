// React Router
import { createBrowserRouter, } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <App />
    },
    {       
        path: "/login", 
        element: <App />
    },
    {          
        path: "/signup", 
        element: <App />
    },
    {        
        path: "/client", 
        element: <App />
    },
    {        
        path: "/statement", 
        element: <App />
    },
    {          
        path: "/investments", 
        element: <App />
    },
    {          
        path: "/manager", 
        element: <App />
    },
])

export default router