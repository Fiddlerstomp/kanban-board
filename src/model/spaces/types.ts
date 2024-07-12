export type SpaceType = {
    id: number;
    title: string;
    owner_id: number;
    allowed_users: number[];
    ordering: number[];
};

export type SetSpacesAT = {
    type: "SET-SPACES";
    payload: {
        spaces: SpaceType[];
    };
};

export type CreateSpaceAT = {
    type: "CREATE-SPACE";
    payload: {
        title: string;
    };
};

export type SpacesActionType = 
    SetSpacesAT
    | CreateSpaceAT;