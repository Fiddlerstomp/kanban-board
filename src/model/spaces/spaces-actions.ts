import { SetSpacesAT, SpaceType } from "./types";

export const SetSpacesAC = (spaces: SpaceType[]): SetSpacesAT => {
    return {type: "SET-SPACES", payload: {spaces}} as const;
};