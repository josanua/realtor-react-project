import {Outlet, Navigate} from "react-router-dom";
import useAuthStatus from "../hooks/useAuthStatus.jsx";
import Spinner from "./Spinner.jsx";

export default function PrivateRoute() {
    const {loggedIn, checkingStatus} = useAuthStatus();
    if (checkingStatus) {
        return <Spinner/>;
    }
    return loggedIn ? <Outlet /> : <Navigate to="/sign-in" />;
}