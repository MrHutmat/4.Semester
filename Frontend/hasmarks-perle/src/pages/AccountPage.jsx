import React from 'react'
import { UserAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";

const AccountPage = () => {
    const { user, logout } = UserAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await logout();
            navigate("/")
        } catch (e) {
            console.log(e.message)

        }
    }

    return (
        <div>
            <div>
                <h1>Her er din account</h1>
                <p>Din email er: {user && user.email}</p>
            </div>
            <button onClick={handleLogout}>Log ud</button>
        </div>
    )
}

export default AccountPage