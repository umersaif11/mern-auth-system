import { createContext } from "react"

export const AppContent = createContext()

export const AppContextProvider = (props) => {


    return (
        <AppContent.Provider value={}>
            {props.children}
        </AppContent.Provider>
    )
}