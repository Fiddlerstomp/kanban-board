import { CreateSpaceAT, SetSpacesAT, SpaceType } from "./types";

export const SetSpacesAC = (spaces: SpaceType[]): SetSpacesAT => {
    return {type: "SET-SPACES", payload: {spaces}} as const;
};

export const CreateSpaceAC = (title: string): CreateSpaceAT => {
    return {type: "CREATE-SPACE", payload: {title}} as const;
};