import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "../user/Login"
import PrivateRoute from "./PrivateRoute"
import Dashboard from "../Dashboard"

const MainRoute = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} />
        </Routes>
        </BrowserRouter>
    )
}

export default MainRoute;