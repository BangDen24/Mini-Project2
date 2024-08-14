import Home from "../pages/Home";
import Login from "../pages/Login";
import ListUser from "../pages/ListUser";
import Profile from "../pages/Profile";
import ProtectedRoute from "./ProtectedRoute";

export const routeList = [
    {
        path: "/",
        element: <Home />,
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