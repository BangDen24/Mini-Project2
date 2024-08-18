import Home from "../pages/Home";
import Login from "../pages/Login";
import ListUser from "../pages/ListUser";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
    {
        path: "/",
        element: (
        <ProtectedRoute>
        <Home />
        </ProtectedRoute>)
    },
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/listuser",
        element:(
        <ProtectedRoute>
        <ListUser />
        </ProtectedRoute>)
    },
    {
        path: "/profile",
        element: (
        <ProtectedRoute>
        <Profile />
        </ProtectedRoute>)}
];