import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Offers from "./pages/Offers.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";

function App() {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App
