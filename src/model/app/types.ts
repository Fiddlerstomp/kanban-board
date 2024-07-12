export type AppConfigType = {
    user: {
        isLoggedIn: boolean;
        username: string | null;
    }
}

export type LoginAT = {
    type: "LOGIN";
    payload: {
        username: string;
    };
};

export type LogoutAT = {
    type: "LOGOUT";
};

export type AppConfigActionsType = LoginAT | LogoutAT;