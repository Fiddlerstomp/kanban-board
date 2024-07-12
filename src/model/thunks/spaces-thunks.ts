import { Dispatch } from "redux";
import spacesAPI from "../../api/spaces-api";
import { CreateSpaceAC, SetSpacesAC } from "../spaces/spaces-actions";
import { AppActionType } from "../store";

export const getSpacesTC = () => {
    return (dispatch: Dispatch<AppActionType>) => {
        spacesAPI.getSpaces()
            .then(res => {
                dispatch(SetSpacesAC(res.data));
            });
    };
};

export const createSpaceTC = (title: string) => {
    return (dispatch: Dispatch<AppActionType>) => {
        spacesAPI.createSpace(title)
            .then(res => {
                dispatch(CreateSpaceAC(title));
            });
    };
}