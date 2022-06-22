import {
    REGISTER_USER_BEGIN,
    REGISTER_USER_ERROR,
    REGISTER_USER_SUCCESS,
} from "./actions";

const reducer = (state, action) => {
    throw new Error(`No such action: ${action.type}`);
};
