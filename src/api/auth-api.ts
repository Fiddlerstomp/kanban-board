import axios from "axios";
import { LoginRequestType } from "./types";

const instance = axios.create({
    baseURL: "http://95.169.205.188/users"
});

const authAPI = {
    login(email: string = "valera.maratovich@gmail.com", password: string = "Djangothebest") {
        const loginData: LoginRequestType = {email, password};
        console.log(loginData);
        return instance.post<LoginRequestType, string>("/login", loginData);
    },
    register(email: string, password: string) {
        const registerData: LoginRequestType = {email, password};
        return instance.post<LoginRequestType, string>("/register", registerData);
    },
    logout() {
        return instance.post("/logout");
    }
};

export default authAPI;