import {Outlet, Navigate} from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus.jsx";

export default function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus();
    if (checkingStatus) {
        return <div>Checking status...</div>;
    }
    return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}