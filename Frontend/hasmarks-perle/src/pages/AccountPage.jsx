import React from 'react'
import { UserAuth } from "../context/AuthContext"

const AccountPage = () => {
    const { user, logout } = UserAuth();

    return (
        <div>
            <div>
                <h1>Her er din account</h1>
                <p>Din email er: {user && user.email}</p>
            </div>
            <button>Log ud</button>
        </div>
    )
}

export default AccountPage