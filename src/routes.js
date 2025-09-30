// React Router
import { createBrowserRouter, } from "react-router-dom";
import App from "./App";
import ClientScreen from "./pages/client";
import InvestmentsScreen from "./pages/investments";
import LoginScreen from "./pages/login";
import ManagerScreen from "./pages/manager";
import SignUpScreen from "./pages/signup";
import StatementScreen from "./pages/statement";

const router = createBrowserRouter([
    { 
        path: "/", 
        element: <App />
    },
    {       
        path: "/login", 
        element: <LoginScreen />
    },
    {          
        path: "/signup", 
        element: <SignUpScreen />
    },
    {        
        path: "/client", 
        element: <ClientScreen />
    },
    {        
        path: "/statement", 
        element: <StatementScreen />
    },
    {          
        path: "/investments", 
        element: <InvestmentsScreen />
    },
    {          
        path: "/manager", 
        element: <ManagerScreen />
    },
])

export default router