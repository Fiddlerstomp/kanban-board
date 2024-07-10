export type SpaceType = {
    title: string;
    owner_id: number;
    allowed_users: number[];
    ordering: number[];
    id: number;
};

export type SetSpacesAT = {
    type: "SET-SPACES";
    payload: {
        spaces: SpaceType[];
    };
};

export type SpacesActionType = SetSpacesAT;