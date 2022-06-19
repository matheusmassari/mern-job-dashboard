import { useState, createContext, useContext } from "react";

export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
};

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [state, setState] = useState(initialState);

    return (
        <AppContext.Provider
            value={{
                ...state,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};

export { AppProvider };