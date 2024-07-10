import axios from "axios";
import { SpaceType } from "../model/spaces/types";

const instance = axios.create({
    baseURL: "http://95.169.205.188/spaces"
});

const spacesAPI = {
    getSpaces() {
        return instance.get<SpaceType[]>("");
    }
};

export default spacesAPI;