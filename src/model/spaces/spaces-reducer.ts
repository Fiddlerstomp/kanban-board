import { SpacesActionType, SpaceType } from "./types";

const initialState: SpaceType[] = [];

const spacesReducer = (state: SpaceType[] = initialState, action: SpacesActionType): SpaceType[] => {
    switch (action.type) {
        case "SET-SPACES": {
            return [...state, ...action.payload.spaces];
        }
        case "CREATE-SPACE": {
            const newSpace: SpaceType = {id: state.length+1, title: action.payload.title, owner_id: 1, allowed_users: [1], ordering: [0]};
            return [...state, newSpace];
        }
        default: {
            return state;
        }
    }
};

export default spacesReducer;