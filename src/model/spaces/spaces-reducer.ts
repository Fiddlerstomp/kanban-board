import { SpacesActionType, SpaceType } from "./types";

const initialState: SpaceType[] = [];

const spacesReducer = (state: SpaceType[] = initialState, action: SpacesActionType): SpaceType[] => {
    switch (action.type) {
        case "SET-SPACES": {
            return [...state];
        }
        default: {
            return state;
        }
    }
};

export default spacesReducer;