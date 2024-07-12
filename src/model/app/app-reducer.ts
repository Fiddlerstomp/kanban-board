import { AppConfigActionsType, AppConfigType } from "./types";

const initialState: AppConfigType = {
    user: {
        isLoggedIn: false,
        username: null
    }
};

const appReducer = (state: AppConfigType, action: AppConfigActionsType): AppConfigType => {
    switch (action.type) {
        case "LOGIN": {
            return {...state, user: {...state.user, isLoggedIn: true}};
        }
        case "LOGOUT": {
            return {...state, user: {...state.user, isLoggedIn: false}};
        }
        default: {
            return state;
        }
    }
}