import { Dispatch } from "redux";
import spacesAPI from "../../api/spaces-api";
import { SetSpacesAC } from "../spaces/spaces-actions";
import { AppActionType } from "../store";

export const getSpacesTC = () => {
    return (dispatch: Dispatch<AppActionType>) => {
        spacesAPI.getSpaces()
            .then(res => {
                dispatch(SetSpacesAC(res.data));
            });
    }
};