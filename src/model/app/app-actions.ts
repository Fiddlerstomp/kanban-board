import { LoginAT, LogoutAT } from "./types"

export const LoginAC = (username: string): LoginAT => {
    return {type: "LOGIN", payload: {username}} as const;
};

export const LogoutAC = (): LogoutAT => {
    return {type: "LOGOUT"} as const;
};