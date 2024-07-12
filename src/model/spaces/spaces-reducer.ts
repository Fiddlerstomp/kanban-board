import { SpacesActionType, SpaceType } from "./types";

const initialState: SpaceType[] = [
    {
        id: 1,
        title: "First space",
        owner_id: 0,
        allowed_users: [0],
        ordering: [0]
    },
    {
        id: 2,
        title: "Second space",
        owner_id: 0,
        allowed_users: [0],
        ordering: [0]
    }
];

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