import axios from "axios";

const instance = axios.create({
    baseURL: "95.169.205.188"
});

export default instance;