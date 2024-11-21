import React, { createContext, useState } from 'react'
import getState from './flux'

export const GlobalContext = createContext(null)


const GlobalContextProvider = ({ children }) => {

    const [state, setState] = useState(getState())

    return (
        <GlobalContext.Provider value={state}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider