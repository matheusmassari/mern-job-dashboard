import { useReducer, createContext, useContext } from "react";
import reducer from "./reducer";

export const initialState = {
    isLoading: false,
    showAlert: false,
    alertText: "",
    alertType: "",
    user: null,
    token: null,
    userLocation: "",
};

const AppContext = createContext();
const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const registerUser = (currentUser) => {
        console.log(currentUser);
    };

    return (
        <AppContext.Provider
            value={{
                ...state,
                registerUser,
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
