export type LoginRequestType = {
    email: string;
    password: string;
};

export type CreateSpaceRequestType = {
    title: string;
    ordering: number[];
};