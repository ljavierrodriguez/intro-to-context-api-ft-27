import React, { createContext, useState } from 'react'

export const GlobalUserContext = createContext(null)


const GlobalUser = ({ children }) => {

    const [user, setUser] = useState(null)

    const login = () => {
        setUser({ username: 'john.doe' })
    }

    const logout = () => {
        setUser(null)
    }

    return (
        <GlobalUserContext.Provider value={{ user, login, logout }}>
            {children}
        </GlobalUserContext.Provider>
    )
}

export default GlobalUser