import axios from "axios";
import { LoginRequestType } from "./types";

const instance = axios.create({
    baseURL: "http://95.169.205.188/users"
});

const authAPI = {
    login(login: string = "valeramaratovich@gmail.com", password: string = "Djangothebest") {
        const loginData: LoginRequestType = {login, password};
        return instance.post<LoginRequestType, string>("/login", loginData);
    },
    register(login: string, password: string) {
        const registerData: LoginRequestType = {login, password};
        return instance.post<LoginRequestType, string>("/register", registerData);
    },
    logout() {
        return instance.post("/logout");
    }
};

export default authAPI;