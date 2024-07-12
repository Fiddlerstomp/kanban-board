import axios from "axios";
import { SpaceType } from "../model/spaces/types";
import { CreateSpaceRequestType } from "./types";

const instance = axios.create({
    baseURL: "http://95.169.205.188/spaces"
});

const spacesAPI = {
    getSpaces() {
        return instance.get<SpaceType[]>("");
    },
    createSpace(title: string) {
        const newSpace: CreateSpaceRequestType = {title, ordering: [0]};
        return instance.post<CreateSpaceRequestType>("", newSpace);
    }
};

export default spacesAPI;