// Imports
import { createContext, useContext, useState } from "react";

// Initialize context
export const Context = createContext({});

export function ContextProvider(props) {
    const [error, setError] = useState(null);
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const getUsers = async () => {
        try {
            const response = await fetch("/api/users");
            const users = await response.json();
            setUsers(users);
        } catch (error) {
            setError(error);
        } finally {
            console.log("users", users);
        }
    }

    return(
        <Context.Provider value={{
            isLoggedIn,
            getUsers,
            setIsLoggedIn,
            setUser,
            error,
            user,
            users,
        }}>
            {props.children}
        </Context.Provider>
    )
}

export const useContextValue = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useContextValue must be used within a ContextProvider");
    }
    return context;
}

